import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { defineElement } from '@lordicon/element';

defineElement();
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
