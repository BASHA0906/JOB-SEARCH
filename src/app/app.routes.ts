import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./job-search/job-search.module').then((m) => m.JobSearchModule),
  },
];
