import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ALL_PROJECTS } from './projects.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects-content',
  imports: [NgClass, ProjectsDetailsComponent],
  templateUrl: './projects-content.component.html',
  styleUrl: './projects-content.component.scss',
})
export class ProjectsContentComponent {
  projects = ALL_PROJECTS;

  constructor(public projectsService: ProjectsService) {}
}
