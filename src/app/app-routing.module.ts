import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";

import { CoursesComponent } from "./views/courses/courses.component";
import { CoursesCreateComponent } from './components/courses/courses-create/courses-create.component';
import { CoursesDeleteComponent } from './components/courses/courses-delete/courses-delete.component';
import { CoursesUpdateComponent } from './components/courses/courses-update/courses-update.component';

import { CategoriesComponent } from "./views/categories/categories.component";
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { CategoriesDeleteComponent } from './components/categories/categories-delete/categories-delete.component';
import { CategoriesUpdateComponent } from './components/categories/categories-update/categories-update.component';

import { StudentsComponent } from "./views/students/students.component";
import { StudentsCreateComponent } from './components/students/students-create/students-create.component';
import { StudentsDeleteComponent } from './components/students/students-delete/students-delete.component';
import { StudentsUpdateComponent } from './components/students/students-update/students-update.component';

import { EnrollmentsComponent } from "./views/enrollments/enrollments.component";
import { EnrollmentsCreateComponent } from './components/enrollments/enrollments-create/enrollments-create.component';
import { EnrollmentsDeleteComponent } from './components/enrollments/enrollments-delete/enrollments-delete.component';
import { EnrollmentsUpdateComponent } from './components/enrollments/enrollments-update/enrollments-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "courses",
    component: CoursesComponent
  },
  {
    path: "courses/create",
    component: CoursesCreateComponent
  },
  {
    path: "courses/delete/:id",
    component: CoursesDeleteComponent,
  },
  {
    path: "courses/update/:id",
    component: CoursesUpdateComponent
  },
  {
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/update/:id",
    component: CategoriesUpdateComponent,
  },
  {
    path: "categories/delete/:id",
    component: CategoriesDeleteComponent,
  },
  {
    path: "categories/create",
    component: CategoriesCreateComponent
  },
  {
    path: "students",
    component: StudentsComponent
  },
  {
    path: "students/create",
    component: StudentsCreateComponent
  },
  {
    path: "students/update/:id",
    component: StudentsUpdateComponent
  },
  {
    path: "students/delete/:id",
    component: StudentsDeleteComponent
  },
  {
    path: "enrollments",
    component: EnrollmentsComponent
  },

  {
    path: "enrollments/update/:id",
    component: EnrollmentsUpdateComponent
  },
  {
    path: "enrollments/delete/:id",
    component: EnrollmentsDeleteComponent
  },
  {
    path: "enrollments/create",
    component: EnrollmentsCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
