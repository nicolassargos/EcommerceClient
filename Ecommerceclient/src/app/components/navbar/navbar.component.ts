import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Array<Category>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    console.log(JSON.stringify(this.categories));
  }

}
