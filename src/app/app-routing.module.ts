import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ComponentAComponent } from './component-a/component-a.component';
import {  ComponentBComponent } from './component-b/component-b.component';
import {  ComponentCComponent } from './component-c/component-c.component';
import {  ComponentEComponent } from './component-e/component-e.component';
import {  ComponentWComponent } from './component-w/component-w.component';
import { ComponentFComponent } from './component-f/component-f.component';


const routes: Routes = [
  {path:"", component: ComponentAComponent},
  {path:"b", component: ComponentBComponent},
  {path:"c", component: ComponentCComponent},
  {path:"e", component: ComponentEComponent},
  {path:"w", component: ComponentWComponent},
  {path:"f", component: ComponentFComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
