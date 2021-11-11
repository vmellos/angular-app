import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../courses/courses.model';
import { Student } from '../../students/students.model';
import { Enrollment } from '../enrollment.model';
import { EnrollmentsService } from '../enrollments.service';

@Component({
  selector: 'app-enrollments-update',
  templateUrl: './enrollments-update.component.html',
  styleUrls: ['./enrollments-update.component.scss']
})
export class EnrollmentsUpdateComponent implements OnInit {
  students: Student[];
  courses: Course[];
  enrollments: Enrollment
  constructor(private router: Router, private route: ActivatedRoute, private enrollmentsService: EnrollmentsService) { 
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
      this.enrollments = enrollments;
    })
  }

  updateEnrollment(): void {
    this.enrollmentsService.update(this.enrollments).subscribe(() => {
      this.enrollmentsService.showMessage('Salvo com sucesso')
      this.router.navigate(['/enrollments'])
    })
  }

  cancel(): void {
    this.router.navigate(['/enrollments'])
  }

}
