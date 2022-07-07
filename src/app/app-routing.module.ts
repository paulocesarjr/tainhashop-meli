import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// páginas
import { ProductsComponent } from './pages/products/products.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'produtos/:name', component: ProductsComponent },
  { path: 'produtos/categoria/:category', component: ProductCategoryComponent },
  { path: 'produto/:product_id', component: ProductItemComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
