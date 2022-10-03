import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  styleUrls: ['./base.component.scss'],
  template: `
          <div>
            <h1>Wilber Quito</h1>
            <h2>I am  <div class="typing__wrapper">
                <span *ngIf="activeIndex == 0" class="typing highligh student">{{messages[0]}}</span>
                <span *ngIf="activeIndex == 1" class="typing highligh engineer">{{messages[1]}}</span>
                <span *ngIf="activeIndex == 2" class="typing highligh scientific">{{messages[2]}}</span>
            </div>  </h2>
          </div>
              `
})
export class BaseComponent { 

     activeIndex = 0;
     messages = [
         'a Student.',
         'an Engineer.',
         'a Data Scientist.'
     ]
     
     ngAfterViewInit() {
         setInterval(this.nextMessage.bind(this), 5000)
     }

     private nextMessage() {
         this.activeIndex ++;
         this.activeIndex = this.activeIndex % this.messages.length;
     }
}

