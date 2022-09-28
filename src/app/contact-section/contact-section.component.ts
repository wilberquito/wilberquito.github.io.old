import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-contact-section',
    styleUrls: ['./contact-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="section">
   <a href="https://github.com/wilberquito/" target="_blank">
    <i class="fa-brands fa-github" ></i>
    </a>
   <a href="https://linkedin.com/in/wilber-quito/" target="_blank">
    <i class="fa-brands fa-linkedin-in"></i>
    </a>
   <a href="https://instagram.com/wilberquito" target="_blank">
    <i class="fa-brands fa-instagram"></i>
    </a>
 
    `
})
export class ContactSectionComponent { }

