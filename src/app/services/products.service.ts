import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const MERCADO_LIVRE_API: string = environment.MERCADO_LIVRE_API;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsByName(name: string) {
    return this.http.get(`${MERCADO_LIVRE_API}/sites/MLB/search?q=${name}`);
  }

  getProductsByCategory(category: string) {
    return this.http.get(`${MERCADO_LIVRE_API}/sites/MLB/search?category=${category}`);
  }

  getAllCategories() {
    return this.http.get(`${MERCADO_LIVRE_API}/sites/MLB/categories`);
  }

  getProductById(product_id: string) {
    return this.http.get(`${MERCADO_LIVRE_API}/items/${product_id}`);
  }

}
