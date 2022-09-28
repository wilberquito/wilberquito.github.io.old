import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BackgroundComponent} from './background/background.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { BaseComponent } from './base/base.component';
import {ContactSectionComponent} from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    BackgroundComponent,
    BaseComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
