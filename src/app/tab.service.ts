import { Injectable } from '@angular/core';
import { TABS } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor() {}

  private _currentTab!: TABS;

  get currentTab(): TABS {
    return this._currentTab;
  }

  setCurrentTab(newTab: TABS): void {
    this._currentTab = newTab;
  }
}
