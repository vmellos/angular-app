import { Component, OnInit } from '@angular/core';
import { Enrollment } from '../enrollment.model';
import { EnrollmentsService } from '../enrollments.service';

@Component({
  selector: 'app-enrollments-read',
  templateUrl: './enrollments-read.component.html',
  styleUrls: ['./enrollments-read.component.scss']
})
export class EnrollmentsReadComponent implements OnInit {
  enrollments: Enrollment[]

  displayedColumns = ['student', 'course', 'edit', 'delete' ]
  constructor(private enrollmentService: EnrollmentsService) {
    this.enrollments = []
   }

  ngOnInit(): void {
    this.enrollmentService.read().subscribe(enrollments => {
      let { results }: any = enrollments
      this.enrollments = results;
    })
  }

}
