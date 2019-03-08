import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Array<Category>;

  constructor(
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
    console.log(JSON.stringify(this.categories));
  }

  redirectToSearch(query: string): void {
    this.router.navigateByUrl('products/' + query);
  }

}
