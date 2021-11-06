import { Component, OnInit } from '@angular/core';
import { Category } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-read',
  templateUrl: './categories-read.component.html',
  styleUrls: ['./categories-read.component.scss']
})
export class CategoriesReadComponent implements OnInit {
  
  categories: Category[]
  displayedColumns = ['name', 'description', 'action']

  constructor(private categoriesService: CategoriesService) {
    this.categories = []
  }

  ngOnInit(): void {
    this.categoriesService.read().subscribe(categories => {
      let { results }: any = categories
      this.categories = results;
    })
  }

}
