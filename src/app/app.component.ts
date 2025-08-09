import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AboutContentComponent } from './about-content/about-content.component';
import { TABS, TABS_LIST } from './app.model';
import { BackgroundStarsComponent } from './background-stars/background-stars.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';
import { keepOrder } from './projects-content/projects-details/keepOrder';
import { TabService } from './tab.service';

@Component({
  selector: 'app-root',
  imports: [
    NgClass,
    HomeContentComponent,
    ProjectsContentComponent,
    ContactContentComponent,
    AboutContentComponent,
    BackgroundStarsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(public tabService: TabService) {}

  keepOrder = keepOrder;

  tabsListEntries: [TABS, string][] = Object.entries(TABS_LIST) as [
    TABS,
    string
  ][];

  TABS = TABS;

  selectTab(tab: TABS) {
    this.tabService.setCurrentTab(tab);
  }
}
