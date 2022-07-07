import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

// páginas
import { ProductsComponent } from './pages/products/products.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';

// serviços
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesComponent } from './shared/categories/categories.component';
import { SearchComponent } from './shared/search/search.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RatingComponent } from './shared/rating/rating.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    CategoriesComponent,
    SearchComponent,
    ProductCategoryComponent,
    ProductCardComponent,
    LoginComponent,
    RatingComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductsService,
    { provide: LOCALE_ID, useValue: 'pt-br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
