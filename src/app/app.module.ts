import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BackgroundComponent} from './background/background.component';
import { DodecahedronComponent } from './dodecahedron/dodecahedron.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecahedronComponent,
    BackgroundComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
