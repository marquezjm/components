import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemListComponent } from './accordion-item-list.component';

describe('AccordionItemListComponent', () => {
  let component: AccordionItemListComponent;
  let fixture: ComponentFixture<AccordionItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
