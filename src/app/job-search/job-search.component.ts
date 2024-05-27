import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'job-search',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss',
})
export class JobSearchComponent {}
