import { Injectable } from '@angular/core';
import { ShoppingProduct } from '../models/shopping-product.model';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ProductDetail } from '../models/product-detail.model';
import { ShoppingProductBuilder } from '../helpers/shopping-product-builder.helper';

@Injectable({
  providedIn: 'root'
})
export class ShoppingProductService extends DataService<ShoppingProduct> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public createShoppingProduct(product: ProductDetail, quantity: number): ShoppingProduct {

    return ShoppingProductBuilder.ConvertToShoppingProduct(product, quantity);
    
  }
}
