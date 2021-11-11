import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../courses/courses.model';
import { Student } from '../../students/students.model';
import { Enrollment } from '../enrollment.model';
import { EnrollmentsService } from '../enrollments.service';

@Component({
  selector: 'app-enrollments-delete',
  templateUrl: './enrollments-delete.component.html',
  styleUrls: ['./enrollments-delete.component.scss']
})
export class EnrollmentsDeleteComponent implements OnInit {
  students: Student[];
  courses: Course[];
  enrollments: Enrollment
  constructor(private enrollmentsService: EnrollmentsService, private route: ActivatedRoute, private router: Router) { 
    this.courses = []
    this.students = []

    this.enrollments = {
      student: {},
      course: {}
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.enrollmentsService.readById(id).subscribe(enrollments => {
      this.enrollments = enrollments
    })
  }

  deleteEnrollment(): void {
    this.enrollmentsService.delete(this.enrollments.id as string).subscribe((enrollments) => {
      this.enrollmentsService.showMessage('Deletado')
      this.router.navigate(['/enrollments']);
    })
  }

  cancel(): void {
    this.router.navigate(['/enrollments'])
  }

}
