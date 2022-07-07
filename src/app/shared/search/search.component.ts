import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ts-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string = '';

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.search = params.name ?? '';
    });
  }

  searchProducts() {
    if (this.search) {
      this.router.navigate(['produtos', this.search]);
    }
  }

}
