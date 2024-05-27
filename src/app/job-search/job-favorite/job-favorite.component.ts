import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Job } from '../../job';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'job-favorite',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './job-favorite.component.html',
  styleUrl: './job-favorite.component.scss',
})
export class JobFavoriteComponent implements OnInit {
  favoriteJobs: Job[] = [];

  constructor() {}

  ngOnInit() {
    this.favoriteJobs = ApiService.favoriteData;
  }
}
