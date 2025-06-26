import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from './types/note.model';

/**
 * Displays a note for viewing/editing.
 * Emits save, delete, and cancel actions.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
})
export class NoteDetailComponent {
  @Input() note!: Note;
  @Output() save = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<Note>();
  @Output() cancel = new EventEmitter<void>();
  editMode = false;
  editNote: Note | null = null;

  ngOnInit() {
    // When loaded, enter edit mode if note is new (has empty content/title)
    if (!this.note.title && !this.note.content) {
      this.startEdit();
    }
  }

  startEdit() {
    this.editMode = true;
    this.editNote = { ...this.note };
  }
  onCancel() {
    this.editMode = false;
    this.editNote = null;
    this.cancel.emit();
  }
  onSave() {
    if (this.editNote) {
      // Trim values before save
      this.editNote.title = this.editNote.title?.trim() || '';
      this.editNote.content = this.editNote.content?.trim() || '';
      this.save.emit(this.editNote);
      this.editMode = false;
      this.editNote = null;
    }
  }
  onDelete() {
    this.delete.emit(this.note);
  }
}
