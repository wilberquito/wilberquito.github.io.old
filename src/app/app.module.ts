import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DodecaedronComponent } from './dodecahedron/dodecahedron.component';

@NgModule({
  declarations: [
    AppComponent,
    DodecaedronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
