import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

// serviços
import { ProductsService } from 'src/app/services/products.service';

const WISHLIST_STORAGE = environment.WISHLIST_STORAGE;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  product: any;
  loading: boolean = false;
  wishlist: any = [];
  isOnWishlist: boolean = false;

  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.loading = true;

      this.service.getProductById(params.product_id).subscribe((res: any) => {
        this.product = res;
        this.loading = false;

        this.getWishlist();
      })
    });
  }

  getWishlist() {
    let wishlist = localStorage.getItem(WISHLIST_STORAGE);

    if (wishlist != null) {
      this.wishlist = JSON.parse(wishlist);
    }

    this.isOnWishlist = this.wishlist.includes(this.product.id);;
  }

  addToWishlist() {
    this.isOnWishlist = true;
    this.wishlist.push(this.product.id);
    localStorage.setItem(WISHLIST_STORAGE, JSON.stringify(this.wishlist));
  }

  removeFromWishlist() {
    this.isOnWishlist = false;
    console.log(this.wishlist)
    this.wishlist = this.wishlist.filter((x: any) => x != this.product.id);
    localStorage.setItem(WISHLIST_STORAGE, JSON.stringify(this.wishlist));
  }

}
