import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// serviços
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  total: number = 0;
  products: any = [];
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.products = [];
      this.loading = true;

      this.service.getProductsByCategory(params.category).subscribe((res: any) => {
        this.total = res.paging.total
        this.products = res.results;
        this.loading = false;
      })
    });
  }

}
