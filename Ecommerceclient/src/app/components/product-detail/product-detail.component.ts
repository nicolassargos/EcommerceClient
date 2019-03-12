import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductDetail } from 'src/app/models/product-detail.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: ProductDetail;

  constructor(private productservice: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productservice.getById(id).subscribe(
      res => {
        console.log(JSON.stringify(res));
        
        this.product = res;
      },
      err => {

      }
    );    
  }
}