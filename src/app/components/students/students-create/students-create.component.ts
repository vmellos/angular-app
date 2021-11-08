import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.scss']
})
export class StudentsCreateComponent implements OnInit {
  student: Student;

  constructor(private studentsService: StudentsService, private router: Router) {
    this.student = {
      name: '',
      status: false,
      email: '',
      phone: ''
    }
  }

  ngOnInit(): void {
  }

  createStudent(): void {
    console.log(this.student)
    this.studentsService.create(this.student).subscribe(student => {

      this.studentsService.showMessage('Salvo')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
   }

}
