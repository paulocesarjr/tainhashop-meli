import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const WISHLIST_STORAGE = environment.WISHLIST_STORAGE;
const RATING_STORAGE = environment.RATING_STORAGE;

@Component({
  selector: 'ts-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product: any;
  isOnWishlist: boolean = false;
  points: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getWishlist();
    this.getRatings();
  }

  getWishlist() {
    let wishlist = localStorage.getItem(WISHLIST_STORAGE);
    if (wishlist !== null) {
      this.isOnWishlist = wishlist.includes(this.product.id);
    }
  }

  getRatings() {
    let ratings = localStorage.getItem(RATING_STORAGE);

    if (ratings !== null) {
      this.points = JSON.parse(ratings).find((x: any) => x.productId == this.product.id)?.rating ?? 0;
    }
  }

}
