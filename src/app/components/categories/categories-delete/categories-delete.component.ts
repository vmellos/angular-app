import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../categories.model';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-delete',
  templateUrl: './categories-delete.component.html',
  styleUrls: ['./categories-delete.component.scss']
})
export class CategoriesDeleteComponent implements OnInit {

  category: Category;

  constructor(private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) {
    this.category = {
      id: '',
      name: '',
      description: '',
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.categoriesService.readById(id).subscribe((category) => {
      this.category = category;
    })
  }

  deleteCategory(): void {
    this.categoriesService.delete(this.category.id as string).subscribe((category) => {
      this.categoriesService.showMessage('Deletado')
      this.router.navigate(['/categories']);
    })
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }

}
