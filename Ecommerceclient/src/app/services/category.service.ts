import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService<Category> {

  constructor(protected http: HttpClient) {
    super(http);
    this.url = this.baseUrl + 'api/category';
   }

  public getAllCategories(): Observable<Category[]> {
    console.log('appel de getAllCategories avec l\'url: ' + this.url);
    this.url = this.baseUrl + 'api/category/all';
    return this.getAll();
  }

  public getAllHierarchicalCategories(): Observable<Category[]> {
    console.log('appel de getAllCategories avec l\'url: ' + this.url);
    this.url = this.baseUrl + 'api/category';
    return this.getAll();
  }
}
