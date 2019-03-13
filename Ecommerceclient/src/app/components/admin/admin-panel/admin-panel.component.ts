import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget/widget.interface';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  sectionList: Widget[];
  sectionSelected: string;

  constructor() { }

  ngOnInit() {
    // Initialise les widgets à afficher
    this.sectionList = [
      { id: 'widgetUsers', iconName: 'users', title: '', subtitle: 'Users', footer: 'Manage users', color: '#f9c109' },
      { id: 'widgetProducts', iconName: 'certificate', title: '', subtitle: 'Products', footer: 'Manage products', color: '#14b931' },
      { id: 'widgetCategories', iconName: 'industry', title: '', subtitle: 'Categories', footer: 'Manage categories', color: '#2558ba' },
      { id: 'widgetOrders', iconName: 'cube', title: '', subtitle: 'Orders', footer: 'Manage orders', color: '#ce341c' }
    ];
    this.sectionSelected = 'dashboard';
  }


  onWidgetClicked(id: string) {
    this.sectionSelected = id;
    console.log('Widget clicked: ' + this.sectionSelected);
  }  
}
