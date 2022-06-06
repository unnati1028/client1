import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = '/api/profile';
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  createProfile(profile: Profile): Observable<any> {
    return this.httpClient.post(this.api, profile);
  }
  createExperience(experience: Experience): Observable<any> {
    return this.httpClient.post('/api/profile/experience', experience);
  }
  createEducation(education: Education): Observable<any> {
    return this.httpClient.post('/api/profile/education', education);
  }
}
