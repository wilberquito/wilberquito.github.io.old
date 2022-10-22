import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dodecahedron',
  styleUrls: ['./dodecahedron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view">
      <div id="stel" class="plane main">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
    </div>
  `
})
export class DodecahedronComponent { }

