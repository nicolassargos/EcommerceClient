import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Component, OnInit, Input } from '@angular/core';
import { Widget } from './widget.interface';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log("Widget Comp: " + this.widget.id);
  }

  clic(){
    
  }

}
