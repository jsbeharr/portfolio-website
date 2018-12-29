import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { Route } from '@angular/router/src/config';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

export const router: Routes = [
    { path: '', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


