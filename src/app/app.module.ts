import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesComponent } from './views/categories/categories.component';
import { CoursesComponent } from './views/courses/courses.component';
import { EnrollmentsComponent } from './views/enrollments/enrollments.component';
import { HomeComponent } from './views/home/home.component';
import { StudentsComponent } from './views/students/students.component';

import { NavComponent } from './components/template/nav/nav.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { CategoriesDeleteComponent } from './components/categories/categories-delete/categories-delete.component';
import { CategoriesReadComponent } from './components/categories/categories-read/categories-read.component';
import { CategoriesUpdateComponent } from './components/categories/categories-update/categories-update.component';

import { CoursesCreateComponent } from './components/courses/courses-create/courses-create.component';
import { CoursesDeleteComponent } from './components/courses/courses-delete/courses-delete.component';
import { CoursesReadComponent } from './components/courses/courses-read/courses-read.component';
import { CoursesUpdateComponent } from './components/courses/courses-update/courses-update.component';

import { StudentsCreateComponent } from './components/students/students-create/students-create.component';
import { StudentsDeleteComponent } from './components/students/students-delete/students-delete.component';
import { StudentsReadComponent } from './components/students/students-read/students-read.component';
import { StudentsUpdateComponent } from './components/students/students-update/students-update.component';

import { EnrollmentsReadComponent } from './components/enrollments/enrollments-read/enrollments-read.component'
import { EnrollmentsCreateComponent } from './components/enrollments/enrollments-create/enrollments-create.component'
import { EnrollmentsDeleteComponent } from './components/enrollments/enrollments-delete/enrollments-delete.component'
import { EnrollmentsUpdateComponent } from './components/enrollments/enrollments-update/enrollments-update.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CategoriesComponent,
    CoursesComponent,
    EnrollmentsComponent,
    StudentsComponent,
    HomeComponent,
    StudentsCreateComponent,
    CoursesCreateComponent,
    CategoriesCreateComponent,
    CategoriesReadComponent,
    CategoriesUpdateComponent,
    CategoriesDeleteComponent,
    CoursesReadComponent,
    CoursesDeleteComponent,
    CoursesUpdateComponent,
    StudentsReadComponent,
    StudentsDeleteComponent,
    StudentsUpdateComponent,
    EnrollmentsReadComponent,
    EnrollmentsCreateComponent,
    EnrollmentsDeleteComponent,
    EnrollmentsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
