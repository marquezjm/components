import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { PrincipalComponent } from './principal/principal.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './shared/radio/radio.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TabComponent } from './shared/tab/tab.component';
import { AccordionComponent } from './shared/accordion-component/accordion/accordion.component';
import { AccordionItemComponent } from './shared/accordion-component/accordion-item/accordion-item.component';
import { AccordionItemListComponent } from './shared/accordion-component/accordion-item-list/accordion-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    CheckboxComponent,
    PrincipalComponent,
    RadioComponent,
    TabsComponent,
    TabComponent,
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
