import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from './types/note.model';

/**
 * Sidebar: lists notes, handles note selection and creation.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() notes: Note[] = [];
  @Input() selectedNoteId: string | null = null;
  @Output() selectNote = new EventEmitter<string>();
  @Output() createNote = new EventEmitter<void>();

  trackById(idx: number, note: Note) {
    return note.id;
  }
}
