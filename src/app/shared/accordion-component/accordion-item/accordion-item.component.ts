import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {

  @Input() title!: string;
  @Input() duracion_m!: number;
  @Input() duracion_s!: number;
  @Input() total_temas!: number;
  @Input() temas_completados!: number;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  //@ViewChild('icono') icono!:FaIconComponent

  //faChevronDown = faChevronDown;
  //faChevronUp = faChevronUp;

  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
    this.onClick.emit();
  }

}
