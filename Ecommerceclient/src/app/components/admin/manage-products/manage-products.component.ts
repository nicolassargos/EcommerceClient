import { ProductDetail } from './../../../models/product-detail.model';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
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
  mode: string;

  constructor(private service: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    // Affiche tous les produits par défaut
    this.mode = 'all';
    this.newProduct = new ProductDetail();
    
    // Récupère tous les produits depuis l'API
    this.service.getAllProducts().subscribe(
      res => {
        this.products = res;
        console.log(JSON.stringify(this.products));
      },
      err => {}
    )

    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      er => {}
    )
  }

  public AddProduct() {
    this.service.create(this.newProduct).subscribe(
      res => {
        this.newProduct = new ProductDetail();
        this.mode = 'all';
      },
      err => {
        console.log('erreur lors de l\'enregistrement: ' + err.message);
      }
    )
  }

  

}
