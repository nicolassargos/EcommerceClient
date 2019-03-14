import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductDetail } from '../models/product-detail.model';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<ProductDetail> {

  constructor(protected http: HttpClient) {
    super(http);
    console.log('initialisation de productService: ' + this.baseUrl);
    this.url = this.baseUrl + 'api/product';
    console.log('initialisation de productService pour url: ' + this.url);
   }

  public getProductById(id: number): Observable<ProductDetail> {
    this.url = this.baseUrl + 'api/product';
    console.log('appel de Getproduct depuis ProductService avec Url: ' + this.url);
    return this.getById(id);
  }

  public createProduct(product: ProductDetail): Observable<ProductDetail> {
    this.url = this.baseUrl + 'api/product'
    return this.create(product);
  }

  public getAllProducts(): Observable<ProductDetail[]> { 
    this.url = this.baseUrl + 'api/product/all';
    return this.getAll();
  }

  public getAllProductsByCategory(categoryId: number): Observable<ProductDetail[]> {
    this.url = this.baseUrl + 'api/product/category/' + categoryId;
    return this.http.get<ProductDetail[]>(this.url, { responseType: 'json', headers: this.getHeaders() })
  }

}