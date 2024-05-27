import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Job } from '../../job';

@Component({
  selector: 'job-list',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  job_list: Job[] = [];
  jobId!: number;
  favoriteJobs: Job[] = [];

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.getAlljob();
  }

  getAlljob() {
    this.service.getAllJobs().subscribe({
      next: (data: Job[]) => {
        this.job_list = data;
        const favoriteJobs = ApiService.favoriteData;
        if (favoriteJobs?.length) {
          this.favoriteJobs = favoriteJobs;
        }
        if (this.favoriteJobs?.length) {
          for (let i = 0; i < this.favoriteJobs.length; i++) {
            const job = this.job_list.find(
              (item) => item.id === this.favoriteJobs[i].id
            );
            if (job !== undefined) {
              job.isfavorite = true;
            }
          }
        }
      },
      error: (error) => {
        console.error('Something Went wrong in jon search list', error);
      },
    });
  }

  toggleFavorite(job: Job) {
    const index = this.favoriteJobs.findIndex(
      (favJob: Job) => favJob.id === job.id
    );
    if (index !== -1) {
      job.isfavorite = false;
      this.favoriteJobs.splice(index, 1);
    } else {
      this.favoriteJobs.push(job);
      job.isfavorite = this.favoriteJobs.some((job: Job) => job.id === job.id);
    }
    ApiService.favoriteData = this.favoriteJobs;
  }
}
