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
    console.log('initialisation de productService: ' + this.url);
    this.url = environment.apiBaseUrl + '/api/product';
    console.log('initialisation de productService pour url: ' + this.url);
   }

  public getProductById(id: number): Observable<ProductDetail> {
    console.log('appel de Getproduct depuis ProductService avec Url: ' + this.url)
    const url =  this.url + '/' + id;
    return this.getById(id);
  }

  public getproduct(id: number) { 
    // : Observable<ProductDetail> {
    // return this.dataService.getById(this.url);
  }

}