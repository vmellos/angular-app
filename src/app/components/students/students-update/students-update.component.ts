import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-update',
  templateUrl: './students-update.component.html',
  styleUrls: ['./students-update.component.scss']
})
export class StudentsUpdateComponent implements OnInit {
  student: Student;
  constructor(private route: ActivatedRoute, private studentsService: StudentsService, private router: Router) {
    this.student = {
      name: '',
      email: '',
      phone: '',
      status: null,
    }

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.studentsService.readById(id).subscribe(student => {
      this.student = student;
    })
  }

  updateStudent(): void {
    this.studentsService.update(this.student).subscribe(() => {
      this.studentsService.showMessage('Salvo com sucesso')
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }

}
