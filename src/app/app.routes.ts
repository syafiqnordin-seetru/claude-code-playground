import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./all-modules/all-modules').then((m) => m.AllModules),
    pathMatch: 'full',
  },
  {
    path: 'project-management',
    loadComponent: () =>
      import('./project-management/project-management').then((m) => m.ProjectManagement),
  },
];
