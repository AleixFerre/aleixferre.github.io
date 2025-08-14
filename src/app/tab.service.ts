import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TABS } from './app.model';
import { ProjectsService } from './projects-content/projects.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor(
    private projectService: ProjectsService,
    private router: Router
  ) {}

  private _currentTab: TABS = TABS.HOME;

  get currentTab(): TABS {
    return this._currentTab;
  }

  setCurrentTab(newTab: TABS, navigate = true): void {
    this._currentTab = newTab;

    if (navigate) {
      this.router.navigate([newTab.toLowerCase()], {
        replaceUrl: true,
      });
    }

    if (newTab === TABS.PROJECTS) {
      this.projectService.setCurrentlyActiveId(null);
    }
  }
}
