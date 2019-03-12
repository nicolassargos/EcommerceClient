import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categories: Array<Category>;

  constructor(
    private categoryService: CategoryService,
    private dataService: DataService<Category>,
    private router: Router
    ) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {

      }
    );
    console.log(JSON.stringify(this.categories));
  }

  redirectToSearch(query: string): void {
    this.router.navigateByUrl('search/' + query);
  }

  public setUrl(url: string): void {
    console.log(url);
    
    this.dataService.setUrl(url);
  }

  public redirectToProduct(id: number): void {
    this.router.navigateByUrl('products/' + id);
  }

  public redirectToCategories(): void {
    this.router.navigateByUrl('categories');
  }

}
