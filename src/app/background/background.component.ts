import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-background',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <video muted="muted" autoplay="true" id="matrix" class="background__video" src="assets/background/binary_rain.mp4" >
    </video>
      `
})
export class BackgroundComponent implements AfterViewInit { 

    ngAfterViewInit() {
        const matrix = <HTMLVideoElement> document.getElementById('matrix')
        matrix.muted = true;
    }
}

