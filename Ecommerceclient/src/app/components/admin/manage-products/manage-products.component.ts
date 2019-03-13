import { ProductDetail } from './../../../models/product-detail.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  productCount: number;
  products: ProductDetail[] = [];
  categories: Category[] = [];
  newProduct: ProductDetail;

  constructor(private service: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.newProduct = new ProductDetail();
    console.log('coucou');
    this.service.getAll().subscribe(
      res => {
        this.products = res;
      },
      err => {}
    )
  }

  

}
