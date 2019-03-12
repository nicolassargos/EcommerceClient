import { ShoppingProduct } from './shopping-product.model';

export class ShoppingBasket {
    id: number;
    userId: number;
    shoppingProducts: Array<ShoppingProduct>;
}