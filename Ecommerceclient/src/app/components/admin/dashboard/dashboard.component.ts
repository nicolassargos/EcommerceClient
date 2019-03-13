import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../widget/widget.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() widgets: Widget[];
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('Dashboard Component reçoit:' + this.widgets);
  }

  ngOnInit() {

  }

  onClick(id: string) {
    console.log(id);
    this.change.emit(id);
  }
}
