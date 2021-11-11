import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Inscrições',
      icon: '',
      routerUrl: '/enrollment'
    }
  }

  ngOnInit(): void {
  }
  navigateToCategoryCreate(): void {
    this.router.navigate(['/enrollments/create'])
  }
}
