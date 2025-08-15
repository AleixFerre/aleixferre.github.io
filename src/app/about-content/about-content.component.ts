import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TABS } from '../app.model';
import { MetricContainerComponent } from '../shared/metric-container/metric-container.component';

@Component({
  selector: 'app-about-content',
  imports: [MetricContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-content.component.html',
  styleUrl: './about-content.component.scss',
})
export class AboutContentComponent {
  age = new Date().getFullYear() - 2000;

  constructor(public router: Router) {}

  goToContact() {
    this.router.navigate([TABS.CONTACT], {
      replaceUrl: true,
      queryParamsHandling: 'replace',
    });
  }
}
