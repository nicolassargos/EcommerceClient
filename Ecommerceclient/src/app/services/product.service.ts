import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductDetail } from '../models/product-detail.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService<ProductDetail>) { }

  public getById(id: number): ProductDetail {
    return { 
      id: 1, 
      name: 'Samsung tv t501', 
      description: 'this is a description', 
      categoryId: 10, 
      category: 'tv', 
      price: 380,
      publicationDate: new Date(2017, 5, 17)};
    }

}