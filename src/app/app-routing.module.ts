import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: 'accordion',
    loadChildren: () =>
      import('./features/accordion/accordion.module').then(
        (x) => x.AccordionModule
      ),
  },
  {
    path: '**',
    redirectTo: 'accordion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
