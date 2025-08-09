import { DatePipe, KeyValuePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';
import { ALL_PROJECTS, DUMMY_PROJECT, Project } from '../projects.model';
import { ProjectsService } from '../projects.service';
import { GalleryComponent } from './gallery/gallery.component';
import { keepOrder } from './keepOrder';

@Component({
  selector: 'app-projects-details',
  imports: [NgClass, KeyValuePipe, DatePipe, GalleryComponent],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss',
})
export class ProjectsDetailsComponent {
  keepOrder = keepOrder;

  constructor(public projectsService: ProjectsService) {
    this.projectsService.currentProject$
      .pipe(takeUntilDestroyed(), distinctUntilChanged())
      .subscribe(() => {
        this.rebuildProject();
      });
  }

  showPreview = true;

  rebuildProject(): void {
    this.showPreview = false;
    setTimeout(() => {
      this.showPreview = true;
    }, 0);
  }

  projects = ALL_PROJECTS;

  findProject(id: string): Project {
    return this.projects.find((project) => project.id === id) || DUMMY_PROJECT;
  }

  getProjectDuration(project: Project): string {
    const createdAt = project.createdAt;
    const finishedAt = project.finishedAt!;

    let start = new Date(createdAt);
    let end = new Date(finishedAt);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    let result = '';

    if (years > 0) {
      result += `${years} year${years > 1 ? 's' : ''}`;
    }

    if (months > 0 || years === 0) {
      if (result) result += ' and ';
      result += `${months} month${months !== 1 ? 's' : ''}`;
    }

    if (months <= 0 && years <= 0) {
      result = 'A week';
    }

    return result;
  }
}
