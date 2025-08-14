import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
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
  keepOrder = keepOrder;

  TABS = TABS;

  tabsListEntries: [TABS, string][] = Object.entries(TABS_LIST) as [
    TABS,
    string
  ][];

  constructor(public tabService: TabService, private router: Router) {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const name = event.url.split('/')[1].toUpperCase();
        this.tabService.setCurrentTab(name as TABS, false);
      }
    });
  }

  selectTab(tab: TABS) {
    this.tabService.setCurrentTab(tab);
  }
}
