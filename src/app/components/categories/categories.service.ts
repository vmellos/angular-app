import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Category } from './categories.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = 'http://localhost:8000/course-categories'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {

  }
  showMessage(msg: string, onError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: onError ? ["error"] : ["success"]
    })
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao criar categoria"))
    )
  }

  errorHandler(e: any, msg: string = "Ocorreu um erro"): Observable<any> {
    this.showMessage(msg, true)
    return EMPTY
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar informações"))
    )
  }

  readById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Category>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao carregar informações"))
    )
  }

  update(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/${category.id}`
    return this.http.put<Category>(url, category).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Erro ao atualizar informações"))
    )
  }

  delete(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Category>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e, "Error ao exclui informações"))
    )
  }

}