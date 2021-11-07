import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Course } from '../courses.model';
import { CoursesService } from '../courses.service';
import { CategoriesService } from '../../categories/categories.service'

@Component({
  selector: 'app-courses-update',
  templateUrl: './courses-update.component.html',
  styleUrls: ['./courses-update.component.scss']
})
export class CoursesUpdateComponent implements OnInit {

  course: Course;
  categories: Category[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private categoriesService: CategoriesService) {
    this.course = {
      name: '',
      description: '',
      category: {
        id: '',
        description: '',
        name: ''
      },
    }

    this.categories = []

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.coursesService.readById(id).subscribe(course => {
      this.course = course;
      console.log(course);
    })

    this.categoriesService.read().subscribe(categories => {
      let { results }: any = categories
      this.categories = results;
    })
  }

  updateCourse(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.coursesService.update(this.course).subscribe(() => {
      this.coursesService.showMessage('Salvo com sucesso')
      this.router.navigate(['/courses'])
    })
  }

  cancel(): void {
    this.router.navigate(['/courses'])
  }
}
