import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private currentProject = new BehaviorSubject<string | null>(null);
  currentProject$ = this.currentProject.asObservable();

  get currentlyActiveId(): string | null {
    return this.currentProject.value;
  }

  setCurrentlyActiveId(index: string | null): void {
    this.currentProject.next(index);
  }
}
