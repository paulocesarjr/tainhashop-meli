import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'ts-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  currentCategory: string = '';
  categories: any = [];

  constructor(private service: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();

    this.route.params.subscribe(params => {
      this.currentCategory = params.category;
    });
  }

  getCategories() {
    this.service.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }

  viewCategory(category: any) {
    if (category.id !== this.currentCategory) {
      this.router.navigate(['produtos/categoria', category.id]);
    }
  }

}
