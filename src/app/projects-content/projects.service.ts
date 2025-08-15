import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ALL_PROJECTS } from './projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private router: Router) {}

  private currentProject = new BehaviorSubject<string | null>(null);
  currentProject$ = this.currentProject.asObservable();

  get currentlyActiveId(): string | null {
    return this.currentProject.value;
  }

  setCurrentlyActiveId(index: string | null): void {
    if (index !== null) {
      const foundProject = ALL_PROJECTS.find((x) => x.id === index);

      if (!foundProject) {
        this.router.navigate(['projects'], {
          replaceUrl: true,
          queryParamsHandling: 'replace',
        });
        return;
      }
    }

    this.currentProject.next(index);

    if (!index) {
      return;
    }

    this.router.navigate(['projects', index], {
      replaceUrl: true,
      queryParamsHandling: 'replace',
    });
  }
}
