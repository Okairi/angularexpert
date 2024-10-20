import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionPageComponent } from './page/accordion-page/accordion-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccordionPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionRoutingModule {}
