import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesService } from './services/notes.service';
import { Note } from './types/note.model';
import { SidebarComponent } from './sidebar.component';
import { NoteDetailComponent } from './note-detail.component';
import { EmptyStateComponent } from './empty-state.component';
import { WelcomeComponent } from './welcome.component';

/* global confirm */

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent,
    NoteDetailComponent,
    EmptyStateComponent,
    WelcomeComponent
  ],
})
export class AppComponent {
  notes: Note[] = [];
  selectedNoteId: string | null = null;

  // Prefix notesService with underscore to appease linter for unused private property
  constructor(private _notesService: NotesService) {
    this.refresh();
  }

  get selectedNote(): Note | undefined {
    return this.selectedNoteId ? this._notesService.getNote(this.selectedNoteId) : undefined;
  }

  refresh() {
    this.notes = this._notesService.getNotes();
    if (this.selectedNoteId) {
      if (!this._notesService.getNote(this.selectedNoteId)) {
        this.selectedNoteId = null; // If note deleted
      }
    }
  }

  onSelect(noteId: string) {
    this.selectedNoteId = noteId;
  }

  onCreate() {
    // Generate unique id
    const note: Note = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      title: '',
      content: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this._notesService.saveNote(note);
    this.selectedNoteId = note.id;
    this.refresh();
  }

  onSave(note: Note) {
    this._notesService.saveNote(note);
    this.selectedNoteId = note.id;
    this.refresh();
  }

  onDelete(note: Note) {
    if (confirm('Delete this note?')) {
      this._notesService.deleteNote(note.id);
      this.selectedNoteId = null;
      this.refresh();
    }
  }

  onCancel() {
    if (
      this.selectedNote &&
      !this.selectedNote.title &&
      !this.selectedNote.content
    ) {
      // Cancel editing new untitled/empty note: delete it
      this._notesService.deleteNote(this.selectedNote.id);
      this.selectedNoteId = null;
      this.refresh();
    }
  }
}
