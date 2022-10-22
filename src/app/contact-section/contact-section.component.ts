import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OverContactService } from '../service/over-contact.service'

@Component({
    selector: 'app-contact-section',
    styleUrls: ['./contact-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="section">
        <a (mouseenter)=enter() (mouseleave)=leave() href="https://github.com/wilberquito/" target="_blank">
            <i class="fa-brands fa-github" ></i>
        </a>
        <a (mouseenter)=enter() (mouseleave)=leave() href="https://linkedin.com/in/wilber-quito/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a (mouseenter)=enter() (mouseleave)=leave() href="https://instagram.com/wilberquito" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </div>

    `
})
export class ContactSectionComponent { 

    constructor(public overService: OverContactService) {}
    
    enter() {
        this.overService.next(true)
    }

    leave() {
        this.overService.next(false)
    }

}

