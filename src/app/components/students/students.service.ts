import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
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

  readById(id: string): Observable<Student> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Student>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar informações"))
    )
  }

  update(category: Student): Observable<Student> {
    const url = `${this.baseUrl}/${category.id}`
    return this.http.put<Student>(url, category).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao atualizar informações"))
    )
  }

  errorHandler(e: any, msg: string = "Ocorreu um erro"): Observable<any> {
    this.showMessage(msg, true)
    return EMPTY
  }

  delete(id: string): Observable<Student> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Student>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Error ao exclui informações"))
    )
  }
}
