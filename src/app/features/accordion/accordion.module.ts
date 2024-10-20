import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';
import { AccordionListComponent } from './components/accordion-list/accordion-list.component';
import { AccordionPageComponent } from './page/accordion-page/accordion-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccordionListComponent, AccordionPageComponent],
  imports: [CommonModule, AccordionRoutingModule, RouterModule],
})
export class AccordionModule {}
