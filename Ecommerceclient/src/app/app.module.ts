import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDropdownItemComponent } from './components/product-dropdown-item/product-dropdown-item.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchProductsComponent } from './components/search-products/search-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    NavbarComponent,
    ProductDropdownItemComponent,
    SearchProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'Home' } },
      { path: 'products/:id', component: ProductDetailComponent, data: { title: 'Product detail' } },
      { path: 'search/:query', component: SearchProductsComponent, data: { title: 'Search a product' } }
    ]),
  ],
  providers: [
    DataService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
