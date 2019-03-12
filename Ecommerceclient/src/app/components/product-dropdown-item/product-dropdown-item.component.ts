import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-product-dropdown-item',
  templateUrl: './product-dropdown-item.component.html',
  styleUrls: ['./product-dropdown-item.component.scss']
})
export class ProductDropdownItemComponent implements OnInit {

  @Input('category') category: Category;

  constructor() { }

  ngOnInit() {
    console.log('\n' + JSON.stringify(this.category) + '\n');
  }

  

}
