import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-background',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      `
})
export class BackgroundComponent implements AfterViewInit { 

    ngAfterViewInit() {
        const matrix = <HTMLVideoElement> document.getElementById('matrix')
        matrix.muted = true;
        matrix.loop = true;
    }
}

