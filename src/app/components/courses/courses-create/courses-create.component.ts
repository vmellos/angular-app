import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Course } from '../courses.model';

import { CategoriesService } from '../../categories/categories.service'
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.scss']
})
export class CoursesCreateComponent implements OnInit {

  categories: Category[];

  course: Course = {
    name: '',
    description: '',
    category: {
      id: '',
      name: '',
      description: '',
    }
  }

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private categoriesService: CategoriesService
  ) { 
    this.categories = []
  }

  ngOnInit(): void {
    this.categoriesService.read().subscribe(categories => {
      let { results }: any = categories
      this.categories = results;
    })
  }

  createCourse(): void {
    this.coursesService.create(this.course).subscribe(course => {
      this.coursesService.showMessage('Salvo')
      this.router.navigate(['/courses'])
    })
  }

  cancel(): void {
    this.router.navigate(['/courses'])
  }

}
