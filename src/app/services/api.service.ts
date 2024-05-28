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
    const local = localStorage.getItem('fav');
    if(local){
      ApiService._favoriteData = JSON.parse(local);
      return ApiService._favoriteData;
    }
    return ApiService._favoriteData;
  }

  public static set favoriteData(data: Job[]) {
    localStorage.setItem('fav', JSON.stringify(data));
    const loaf = localStorage.getItem('fav');
    if(loaf){
      ApiService._favoriteData = JSON.parse(loaf);
    }
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJobById(id: number): Observable<JobData> {
    return this.http.get<JobData>(`${this.url}/${id}`);
  }
}
