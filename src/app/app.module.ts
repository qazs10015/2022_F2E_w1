import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LevelDetailButtonComponent } from 'src/shared/level-detail-button/level-detail-button.component';
import { SighUpButtonXLComponent } from 'src/shared/sigh-up-xl/sigh-up-xl.component';
import { SighUpButtonComponent } from 'src/shared/sigh-up/sigh-up.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoryBoard1Component } from './story-board1/story-board1.component';
import { StoryBoard2Component } from './story-board2/story-board2.component';
import { StoryBoard3Component } from './story-board3/story-board3.component';
import { StoryBoard4Component } from './story-board4/story-board4.component';
import { StoryBoard5Component } from './story-board5/story-board5.component';
import { StoryBoard6Component } from './story-board6/story-board6.component';

@NgModule({
  declarations: [
    AppComponent,
    StoryBoard1Component,
    StoryBoard2Component,
    StoryBoard3Component,
    StoryBoard4Component,
    StoryBoard5Component,
    StoryBoard6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SighUpButtonComponent,
    SighUpButtonXLComponent,
    LevelDetailButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
