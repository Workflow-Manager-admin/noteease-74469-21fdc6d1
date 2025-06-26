import { Component } from '@angular/core';

/**
 * Welcome/placeholder display prompting user to select a note.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-welcome',
  template: `
    <section class="welcome-state">
      <div class="welcome-icon">📚</div>
      <div class="welcome-title">Select a note…</div>
      <div class="welcome-msg">Choose from your list at left (or above, on mobile) to view or edit.</div>
    </section>
  `,
  styles: [`
    .welcome-state {
      margin: 3vw auto;
      text-align: center;
      color: var(--gray-dark);
      opacity: 0.9;
    }
    .welcome-icon {
      font-size: 2.2rem;
      margin-bottom: 1rem;
      opacity: 0.85;
    }
    .welcome-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.4em;
      color: var(--primary);
    }
    .welcome-msg {
      font-size: 0.98rem;
      color: var(--gray-dark);
    }
  `],
  standalone: true
})
export class WelcomeComponent {}
