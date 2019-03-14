import { ShoppingProductService } from './shopping-product.service';
import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
import { ShoppingProduct } from '../models/shopping-product.model';
import { ShoppingCart } from '../models/shopping-cart.model';
import { HttpClient } from '@angular/common/http';
import { ProductDetail } from '../models/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService extends DataService<ShoppingCart> {

  constructor(protected http: HttpClient,
    private shoppingProductService: ShoppingProductService) {
    super(http);
    this.url = this.baseUrl + 'api/shopping';
  }

  //
  public createShoppingCart() {
    let cart = new ShoppingCart();
    localStorage.setItem('currentCart', JSON.stringify(cart));
  }

  //
  public getCurrentShoppingCart(): ShoppingCart {
    return JSON.parse(localStorage.getItem('currentCart'));
  }


  public addProductToShoppingCart(product: ProductDetail, quantity: number): void {

    if (!product || quantity === 0) return;
  
    let cart = this.getCurrentShoppingCart();
    let productInCart = cart.shoppingProducts.find(prod => prod.productId === product.id);

    if (productInCart)
      productInCart.quantity += quantity;
    else 
    {
      let newShoppingProdruct = this.shoppingProductService.createShoppingProduct(product, quantity);
      cart.shoppingProducts.push(newShoppingProdruct);
    }

    localStorage.setItem('currentCart', JSON.stringify(cart));
  }

  //
  public validateShoppingCart(): void {
    this.create(this.getCurrentShoppingCart()).subscribe(
      res => {
        console.log('Cart validated: ' + JSON.stringify(res));
        this.createShoppingCart();
      }
    );
  }
}
