import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../courses/courses.service';
import { StudentsService } from '../../students/students.service';
import { EnrollmentsService } from '../enrollments.service';
import { Student, Course, Enrollment } from '../enrollment.model'
@Component({
  selector: 'app-enrollments-create',
  templateUrl: './enrollments-create.component.html',
  styleUrls: ['./enrollments-create.component.scss']
})
export class EnrollmentsCreateComponent implements OnInit {

  students: Student[];
  courses: Course[];
  enrollments: Enrollment

  constructor(
    private router: Router,
    private enrollmentsService: EnrollmentsService,
    private coursesService: CoursesService,
    private studentsService: StudentsService
  ) {
    this.courses = []
    this.students = []

    this.enrollments = {
      students: {},
      courses: {}
    }
  }

  ngOnInit(): void {
    this.coursesService.read().subscribe(course => {
      let { results }: any = course
      this.courses = results;
    })
    this.studentsService.read().subscribe(student => {
      let { results }: any = student
      this.students = results;
    })
  }

  createEnrollment(): void {
    // console.log(this.enrollments)
    this.enrollmentsService.create(this.enrollments).subscribe(enrollment => {

      this.coursesService.showMessage('Salvo')
      this.router.navigate(['/enrollments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/enrollments'])
  }

}
