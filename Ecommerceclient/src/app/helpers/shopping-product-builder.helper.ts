import { ShoppingProduct } from './../models/shopping-product.model';
import { ProductDetail } from '../models/product-detail.model';

export class ShoppingProductBuilder
{
    constructor() {}

    public static ConvertToShoppingProduct(product: ProductDetail, productQuantity: number): ShoppingProduct {
        if (!product || productQuantity === 0) return null;

        let shoppingProduct: ShoppingProduct =  {
            id: 0,
            name: product.name,
            productId: product.id,
            pricePerUnit: product.price,
            quantity: productQuantity
        }

        return shoppingProduct;
    }
}