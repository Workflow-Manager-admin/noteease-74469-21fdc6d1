import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { NoteDetailComponent } from './note-detail.component';
import { EmptyStateComponent } from './empty-state.component';
import { WelcomeComponent } from './welcome.component';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarComponent,
    NoteDetailComponent,
    EmptyStateComponent,
    WelcomeComponent
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
