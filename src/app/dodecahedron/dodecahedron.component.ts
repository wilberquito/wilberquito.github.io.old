import { Component, ChangeDetectionStrategy, ViewChild, Renderer2 } from '@angular/core';
import { OverContactService } from '../service/over-contact.service'

@Component({
  selector: 'app-dodecahedron',
  styleUrls: ['./dodecahedron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="view">
      <div #stel class="plane main">
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
export class DodecahedronComponent { 

    @ViewChild('stel') stel: any; 

    constructor(public overService: OverContactService,
               public renderer: Renderer2) {}
    ngOnInit() {
        const stream =  this.overService.stream()
        stream.subscribe(this.stremHandler.bind(this))
    }

    ngAfterViewInit() {
    }
    

    stremHandler(state: boolean) {

        if(state) {
            this.renderer.addClass(this.stel.nativeElement, 'tunned');
        }
        else {
            this.renderer.removeClass(this.stel.nativeElement, 'tunned');
        }

    }
}

