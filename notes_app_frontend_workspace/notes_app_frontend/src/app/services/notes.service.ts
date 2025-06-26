import { Injectable } from '@angular/core';
import { Note } from '../types/note.model';

/* global window */
const STORAGE_KEY = 'notes.app.notes';

// PUBLIC_INTERFACE
@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Note[] = [];
  private isBrowser: boolean =
    typeof window !== 'undefined' && !!window.localStorage;

  constructor() {
    this.load();
  }

  /** Returns all notes sorted latest-edited first. */
  getNotes(): Note[] {
    return this.notes.slice().sort((a, b) => b.updatedAt - a.updatedAt);
  }

  /** Find note by id. */
  getNote(id: string): Note | undefined {
    return this.notes.find(n => n.id === id);
  }

  /** Add or update note. */
  saveNote(note: Note): void {
    const idx = this.notes.findIndex(n => n.id === note.id);
    note.updatedAt = Date.now();
    if (idx !== -1) {
      this.notes[idx] = { ...note };
    } else {
      note.createdAt = note.updatedAt;
      this.notes.push({ ...note });
    }
    this.persist();
  }

  /** Remove note by id. */
  deleteNote(id: string): void {
    this.notes = this.notes.filter(n => n.id !== id);
    this.persist();
  }

  /** Persist all notes to localStorage. */
  private persist(): void {
    if (this.isBrowser) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notes));
    }
  }

  /** Load notes from localStorage. */
  private load(): void {
    if (this.isBrowser) {
      const data = window.localStorage.getItem(STORAGE_KEY);
      if (data) {
        try {
          this.notes = JSON.parse(data) || [];
        } catch {
          this.notes = [];
        }
      }
    } else {
      this.notes = [];
    }
  }
}
