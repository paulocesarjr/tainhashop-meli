import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// serviços
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  total: number = 0;
  products: any = [];
  loading = false;

  constructor(private service: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.products = [];
      this.searchProductsByName(params.name);
    });
  }

  searchProductsByName(name: string) {
    this.loading = true;
    
    this.service.getProductsByName(name).subscribe((res: any) => {
      this.total = res.paging.total
      this.products = res.results;
      this.loading = false;
    });
  }

}
