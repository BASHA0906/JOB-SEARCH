import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Job, JobData } from '../job';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = './jobs';
  private static _favoriteData: Job[];

  constructor(private http: HttpClient) {}

  public static get favoriteData(): Job[] {
    return ApiService._favoriteData;
  }

  public static set favoriteData(data: Job[]) {
    ApiService._favoriteData = data;
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJobById(id: number): Observable<JobData> {
    return this.http.get<JobData>(`${this.url}/${id}`);
  }
}
