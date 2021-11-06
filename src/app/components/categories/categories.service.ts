import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Category } from './categories.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = 'http://localhost:8000/course-categories'

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {

  }
  showMessage(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category)
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }

  readById(id: string): Observable<Category> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Category>(url)
  }

  update(category: Category): Observable<Category> {
    const url = `${this.baseUrl}/${category.id}`
    return this.http.put<Category>(url, category)
  }

}