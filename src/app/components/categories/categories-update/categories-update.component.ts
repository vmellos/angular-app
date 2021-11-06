import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../categories.model';
import { CategoriesService } from '../categories.service';


@Component({
  selector: 'app-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss']
})
export class CategoriesUpdateComponent implements OnInit {
  category: Category;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute) {
    this.category = {
      name: '',
      description: '',
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.categoriesService.readById(id).subscribe(category => {
      this.category = category;
    })
  }

  updateCategory(): void {
    this.categoriesService.update(this.category).subscribe(() => {
      this.categoriesService.showMessage('Salvo com sucesso')
      this.router.navigate(['/categories'])
    })
  }

  cancel(): void {
    this.router.navigate(['/categories'])
  }
}
