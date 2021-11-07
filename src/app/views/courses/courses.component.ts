import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Cursos',
      icon: '',
      routerUrl: '/courses'
    }
  }

  ngOnInit(): void {
  }

  navigateToCourseCreate(): void {
    this.router.navigate(['/courses/create'])
  }

}
