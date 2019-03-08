import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { ProductDetail } from '../models/product-detail.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService: DataService<ProductDetail>) { }

  public getAllCategories(): Array<Category>{
    let categories = new Array<Category>();
    categories = [
      { 
        id: 1, 
        name: 'category1', 
        subCategories: new Array<Category>(
        {
          id: 4, 
          name: 'category11', 
          subCategories: new Array<Category>(
            {
              id: 8, 
              name: 'category111', 
              subCategories: null
            },
            {
              id: 9, 
              name: 'category112', 
              subCategories: null
            }
          )
        },
        {
          id: 5, 
          name: 'category11', 
          subCategories: new Array<Category>(
            {
              id: 10, 
              name: 'category111', 
              subCategories: null
            }
          )
        },
        { 
          id: 2, 
          name: 'category1', 
          subCategories: new Array<Category>(
          {
            id: 6, 
            name: 'category11', 
            subCategories: new Array<Category>(
              {
                id: 11, 
                name: 'category111', 
                subCategories: null
              },
              {
                id: 12, 
                name: 'category112', 
                subCategories: null
              }
            )
          },
          {
            id: 7, 
            name: 'category11', 
            subCategories: new Array<Category>(
              {
                id: 13, 
                name: 'category111', 
                subCategories: null
              }
            )
          })
        }
        )}
      ];
    return categories;
    }
}