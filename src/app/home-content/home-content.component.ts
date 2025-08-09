import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TABS } from '../app.model';
import { FEATURED_PROJECTS } from '../projects-content/projects.model';
import { ProjectsService } from '../projects-content/projects.service';
import { IconTextComponent } from '../shared/icon-text/icon-text.component';
import { MetricContainerComponent } from '../shared/metric-container/metric-container.component';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-home-content',
  imports: [MetricContainerComponent, IconTextComponent, NgClass],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss',
})
export class HomeContentComponent {
  projects = FEATURED_PROJECTS;

  constructor(
    public tabService: TabService,
    private projectsService: ProjectsService
  ) {}

  selectGame(id: string) {
    this.tabService.setCurrentTab(TABS.PROJECTS);
    this.projectsService.setCurrentlyActiveId(id);
  }

  goToProfile() {
    this.tabService.setCurrentTab(TABS.ABOUT);
  }
}
