import { Component, OnInit } from '@angular/core';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-read',
  templateUrl: './students-read.component.html',
  styleUrls: ['./students-read.component.scss']
})
export class StudentsReadComponent implements OnInit {
  students: Student[]
  displayedColumns = ['name', 'email', 'phone', 'status', 'edit', 'delete']
  constructor(private studentsService: StudentsService) {
    this.students = []
   }

  ngOnInit(): void {
    this.studentsService.read().subscribe(students => {
      let { results }: any = students
      this.students = results;
    })
  }

}
