import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const RATING_STORAGE = environment.RATING_STORAGE;

@Component({
  selector: 'ts-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input()
  productId: string = '';
  points: number = 0;
  ratingOptions: number[] = [1, 2, 3, 4, 5];
  ratings: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings() {
    let ratings = localStorage.getItem(RATING_STORAGE);

    if (ratings != null) {
      this.ratings = JSON.parse(ratings);
    }

    this.points = this.ratings.find((x: any) => x.productId == this.productId)?.rating ?? 0;
  }

  rate(option: number) {
    let rating = this.ratings.find((x: any) => x.productId == this.productId);

    if (rating) {
      rating.rating = option;
    } else {
      this.ratings.push({ productId: this.productId, rating: option });
    }

    localStorage.setItem(RATING_STORAGE, JSON.stringify(this.ratings));
    this.points = option;
  }

}
