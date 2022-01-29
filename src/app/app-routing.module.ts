import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './mycomp/about/about.component';
import { HomeComponent } from './mycomp/home/home.component';
import { PorjectsComponent } from './mycomp/porjects/porjects.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'projects', component:PorjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
