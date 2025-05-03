import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  @Input() tabTitle: string ='';
  @Input('height')height: number = 0;
  @Input()mostrar=true
  active: boolean = true;

}
