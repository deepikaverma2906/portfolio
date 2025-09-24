import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl = 'http://localhost:5000/api'; // ✔️ Base API URL

  constructor(private http: HttpClient) {}

  getProfileImage() {
    return this.http.get<any[]>(`${this.baseUrl}/image/all`);
  }

  // getImageFullPath(path: string) {
  //   // backend static folder + path
  //   return `http://localhost:5000/${path}`; // adjust according to your backend
  // }
  

  getResumeUrl() {
    return this.http.get<any[]>(`${this.baseUrl}/resume/all`);
  }
  
  getResumeFullPath(relativePath: string): string {
    return `http://localhost:5000${relativePath}`;
  }
  
  getImageFullPath(relativePath: string): string {
    return `http://localhost:5000${relativePath}`;
  }
  downloadResumeUrl(filename: string): string {
    return `http://localhost:5000/api/resume/download/${filename}`;
  }
  
}
