import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Categoria',
      icon: '',
      routerUrl: '/categories'
    }
  }

  ngOnInit(): void {
  }

  navigateToCategoryCreate(): void {
    this.router.navigate(['/categories/create'])
  }
}
