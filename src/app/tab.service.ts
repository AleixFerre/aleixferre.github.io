import { Injectable } from '@angular/core';
import { TABS } from './app.model';
import { ProjectsService } from './projects-content/projects.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor(private projectService: ProjectsService) {}

  private _currentTab: TABS = TABS.HOME;

  get currentTab(): TABS {
    return this._currentTab;
  }

  setCurrentTab(newTab: TABS): void {
    this._currentTab = newTab;

    if (newTab === TABS.PROJECTS) {
      this.projectService.setCurrentlyActiveId(null);
    }
  }
}
