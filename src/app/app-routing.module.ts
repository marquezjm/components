import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'components', component: ComponentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
