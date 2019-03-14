import { ShoppingProduct } from './shopping-product.model';

export class ShoppingCart {
    id: number;
    userId: number;
    shoppingProducts: Array<ShoppingProduct>;

    /**
     *
     */
    constructor() {
        this.id = 0;
        this.userId = 0;
        this.shoppingProducts = new Array<ShoppingProduct>();
    }
}