import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
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
import { CategoriesListingComponent } from './components/categories-listing/categories-listing.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { WidgetComponent } from './components/admin/widget/widget.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    NavbarComponent,
    ProductDropdownItemComponent,
    SearchProductsComponent,
    CategoriesListingComponent,
    AdminPanelComponent,
    WidgetComponent,
    ManageProductsComponent,
    DashboardComponent,
    CategoryProductsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { title: 'Home' } },
      { path: 'products/:id', component: ProductDetailComponent, data: { title: 'Product detail' } },
      { path: 'products/category/:id', component: CategoryProductsComponent, data: { title: 'Products by category' } },
      { path: 'search/:query', component: SearchProductsComponent, data: { title: 'Search a product' } },
      { path: 'admin', component: AdminPanelComponent, data: { title: 'Admin - Dashboard' } }
    ]),
  ],
  providers: [
    DataService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
