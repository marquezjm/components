import { AfterContentInit, AfterViewInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionItemComponent) items!: QueryList<AccordionItemComponent>;

  ngAfterContentInit() {
    this.items.toArray().forEach(item => {
      item.onClick.subscribe(() => {
        this.closeAllExcept(item);
      });
    });
  }

  closeAllExcept(selectedItem: AccordionItemComponent) {
    this.items.toArray().forEach(item => {
      if (item !== selectedItem) {
        item.isOpen = false;
      }
    });
  }

}
