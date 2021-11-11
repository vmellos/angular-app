import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Enrollment } from './enrollment.model'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentsService {
  
  baseUrl = 'http://localhost:8000/enrollments'
  

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  create(course: Enrollment): Observable<Enrollment> {
    console.log(course)
    return this.http.post<Enrollment>(this.baseUrl, course)
  }
}
