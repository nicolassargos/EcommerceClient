import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-listing',
  templateUrl: './categories-listing.component.html',
  styleUrls: ['./categories-listing.component.scss']
})
export class CategoriesListingComponent implements OnInit {

  categories: Array<Category> = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {

      }
    );
  }

}
