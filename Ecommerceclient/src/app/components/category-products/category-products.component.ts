import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetail } from 'src/app/models/product-detail.model';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit, OnChanges {

  navigationSubscription;

  categoryId: number;
  products: ProductDetail[] = [];

  constructor(private service: ProductService,
    private route: ActivatedRoute,
    private router: Router) 
    {
      this.navigationSubscription = this.router.events.subscribe(
        (e: any) => {
          if (e instanceof NavigationEnd) {
            this.initialisationCategoryProducts();
          }
        }
      )
    }

  ngOnInit() {

  }

  ngOnChanges() {
    
  }

  public initialisationCategoryProducts() {
    this.categoryId = +this.route.snapshot.paramMap.get('id');
    console.log('onchanges de CategoryProducts avec id :' + this.categoryId);
    this.service.getAllProductsByCategory(this.categoryId).subscribe(
      res => {
        console.log(JSON.stringify(res));
        this.products = res;
      },
      err => {
  
      }
    );
  }


}
