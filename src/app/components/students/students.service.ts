import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Student } from './students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl = 'http://localhost:8000/students'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, onError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: onError ? ["error"] : ["success"]
    })
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student)
  }

  read(): Observable<Student> {
    return this.http.get<Student>(this.baseUrl)
  }
}
