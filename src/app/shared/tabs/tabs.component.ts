import { Component, ContentChildren, OnChanges, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnChanges {

  @ContentChildren(TabComponent) tabList!: QueryList<TabComponent>;
  tabs: TabComponent[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterContentInit() {
    this.tabs = this.tabList.toArray();
    this.selectTab(this.tabs[0]);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }

  movToTab(n:number){
    this.tabs.forEach(t => t.active = false);
    this.tabs[n].active=true
  }

}
