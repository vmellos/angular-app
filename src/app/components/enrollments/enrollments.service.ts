import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Enrollment } from './enrollment.model'
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

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

  read(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar informações"))
    )
  }

  showMessage(msg: string, onError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: onError ? ["error"] : ["success"]
    })
  }

  errorHandler(e: any, msg: string = "Ocorreu um erro"): Observable<any> {
    this.showMessage(msg, true)
    return EMPTY
  }

  readById(id: string): Observable<Enrollment> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Enrollment>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar informações"))
    )
  }

  update(category: Enrollment): Observable<Enrollment> {
    const url = `${this.baseUrl}/${category.id}`
    return this.http.put<Enrollment>(url, category).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao atualizar informações"))
    )
  }

  delete(id: string): Observable<Enrollment> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Enrollment>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Error ao exclui informações"))
    )
  }
}
