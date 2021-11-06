import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { CoursesComponent } from "./views/courses/courses.component";
import { CategoriesComponent } from "./views/categories/categories.component";
import { StudentsComponent } from "./views/students/students.component";
import { EnrollmentsComponent } from "./views/enrollments/enrollments.component";
import { CoursesCreateComponent } from './components/courses/courses-create/courses-create.component';
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { StudentsCreateComponent } from './components/students/students-create/students-create.component';
import { EnrollmentsCreateComponent } from './components/enrollments/enrollments-create/enrollments-create.component';
import { CategoriesUpdateComponent } from './components/categories/categories-update/categories-update.component';

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
    path: "categories",
    component: CategoriesComponent
  },
  {
    path: "categories/update/:id",
    component: CategoriesUpdateComponent,
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
    path: "enrollments",
    component: EnrollmentsComponent
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
