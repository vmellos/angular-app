import { Component, OnInit } from '@angular/core';
import { Course } from '../courses.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-read',
  templateUrl: './courses-read.component.html',
  styleUrls: ['./courses-read.component.scss']
})
export class CoursesReadComponent implements OnInit {

  courses: Course[]
  displayedColumns = ['name', 'description', 'edit', 'delete']

  constructor(private coursesService: CoursesService) {
    this.courses = []
  }

  ngOnInit(): void {
    this.coursesService.read().subscribe(courses => {
      let { results }: any = courses;
      this.courses = results;
    })
  }

}
