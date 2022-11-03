import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LevelDetailButtonComponent } from 'src/shared/level-detail-button/level-detail-button.component';
import { SighUpButtonXLComponent } from 'src/shared/sigh-up-xl/sigh-up-xl.component';
import { SighUpButtonComponent } from 'src/shared/sigh-up/sigh-up.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
