import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { Category } from '../categories.model';

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.scss']
})
export class CategoriesCreateComponent implements OnInit {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(): void {
    this.categoriesService.create(this.category).subscribe(category => {

      this.categoriesService.showMessage('Salvo')
      this.router.navigate(['/categories'])
    })
  }
  cancel(): void {
    this.router.navigate(['/categories'])
  }

}
