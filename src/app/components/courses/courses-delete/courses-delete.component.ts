import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../courses.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-delete',
  templateUrl: './courses-delete.component.html',
  styleUrls: ['./courses-delete.component.scss']
})
export class CoursesDeleteComponent implements OnInit {
  course: Course;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute, private router: Router) {
    this.course = {
      name: '',
      description: '',
      category: {
        id: '',
        name: '',
        description: '',
      },
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.coursesService.readById(id).subscribe(course => {
      this.course = course;
    })
  }

  deleteCourse(): void {
    this.coursesService.delete(this.course.id as string).subscribe((course) => {
      this.coursesService.showMessage('Deletado')
      this.router.navigate(['/courses']);
    })
  }

  cancel(): void {
    this.router.navigate(['/courses'])
  }
}
