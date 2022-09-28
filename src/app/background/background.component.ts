import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-background',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <video class="background__video" src="assets/background/binary_rain.mp4" autoplay muted loop>
    </video>
      `
})
export class BackgroundComponent { }

