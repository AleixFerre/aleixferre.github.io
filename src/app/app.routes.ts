import { Routes } from '@angular/router';
import { AboutContentComponent } from './about-content/about-content.component';
import { TABS } from './app.model';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProjectsContentComponent } from './projects-content/projects-content.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeContentComponent,
    data: {
      tab: TABS.HOME,
    },
  },
  {
    path: 'projects',
    component: ProjectsContentComponent,
    data: {
      tab: TABS.PROJECTS,
    },
  },
  {
    path: 'projects/:id',
    component: ProjectsContentComponent,
    data: {
      tab: TABS.PROJECTS,
    },
  },
  {
    path: 'about',
    component: AboutContentComponent,
    data: {
      tab: TABS.ABOUT,
    },
  },
  {
    path: 'contact',
    component: ContactContentComponent,
    data: {
      tab: TABS.CONTACT,
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
