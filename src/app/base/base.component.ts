import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
          <div>
            <h1>Wilber Quito</h1>
            <h2>I am  <div class="typing__wrapper">
<span class="typing highligh">an Engineer.</span>
            </div>  </h2>
          </div>
              `
})
export class BaseComponent { }

