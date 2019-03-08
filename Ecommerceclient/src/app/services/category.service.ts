import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private dataService: DataService<Category>) { }

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
