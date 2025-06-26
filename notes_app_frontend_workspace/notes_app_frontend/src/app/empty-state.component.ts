import { Component } from '@angular/core';

/**
 * Empty state illustration for when no notes exist.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-empty-state',
  template: `
    <div class="empty-state">
      <div class="empty-icon">📝</div>
      <div class="empty-title">No notes found</div>
      <div class="empty-msg">Click the ＋ button to add a new note.</div>
    </div>
  `,
  styles: [`
    .empty-state {
      margin: 6vw auto;
      text-align: center;
      color: var(--gray-dark);
      opacity: 0.7;
    }
    .empty-icon {
      font-size: 2.5rem;
      margin-bottom: 1.1rem;
      opacity: 0.81;
    }
    .empty-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 0.6em;
      color: var(--secondary);
      opacity: 1;
    }
    .empty-msg {
      font-size: 1.08rem;
      color: var(--gray-dark);
    }
  `],
  standalone: true
})
export class EmptyStateComponent {}
