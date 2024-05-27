import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './job-search.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JobSearchComponent } from './job-search.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    JobSearchComponent,
    HttpClientModule,
  ],
})
export class JobSearchModule {}
