import { Injectable } from '@angular/core';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Course } from './courses.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseUrl = 'http://localhost:8000/courses'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, onError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: onError ? ["error"] : ["success"]
    })
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course)
  }

  read(): Observable<Course> {
    return this.http.get<Course>(this.baseUrl)
  }

  readById(id: string): Observable<Course> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Course>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar curso"))
    )
  }

  update(course: Course): Observable<Course> {
    const url = `${this.baseUrl}/${course.id}`
    return this.http.put<Course>(url, course).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao atualizar curso"))
    )
  }

  errorHandler(e: any, msg: string = "Ocorreu um erro"): Observable<any> {
    this.showMessage(msg, true)
    return EMPTY
  }

  delete(id: string): Observable<Course> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Course>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Error ao exclui curso"))
    )
  }
}
