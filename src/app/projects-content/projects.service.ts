import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

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
