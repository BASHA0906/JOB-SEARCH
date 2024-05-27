import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFavoriteComponent } from './job-favorite/job-favorite.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobSearchComponent } from './job-search.component';
import { JobViewComponent } from './job-view/job-view.component';

const routes: Routes = [
  {
    path: '',
    component: JobSearchComponent,
    children: [
      {
        path: 'job-list',
        component: JobListComponent,
      },
      {
        path: 'job-view/:id',
        component: JobViewComponent,
      },
      {
        path: 'job-favorite',
        component: JobFavoriteComponent,
      },
      {
        path: '',
        redirectTo: '/job-list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
