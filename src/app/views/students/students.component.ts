import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Estudantes',
      icon: '',
      routerUrl: '/students'
    }
  }

  ngOnInit(): void {
  }
  navigateToCategoryCreate(): void {
    this.router.navigate(['/students/create'])
  }
}
