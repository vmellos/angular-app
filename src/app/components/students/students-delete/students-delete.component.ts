import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-delete',
  templateUrl: './students-delete.component.html',
  styleUrls: ['./students-delete.component.scss']
})
export class StudentsDeleteComponent implements OnInit {
  student: Student
  constructor(private router: Router, private studentsService: StudentsService, private route: ActivatedRoute) {
    this.student = {
      name: '',
      email: '',
      phone: '',
      status: null,
    }
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.studentsService.readById(id).subscribe((student) => {
      this.student = student;
    })
  }

  deleteStudent(): void {
    this.studentsService.delete(this.student.id as string).subscribe((student) => {
      this.studentsService.showMessage('Deletado')
      this.router.navigate(['/students']);
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }
}
