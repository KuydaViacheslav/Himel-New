import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentEComponent } from './component-e/component-e.component';
import { ComponentWComponent } from './component-w/component-w.component';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodiComponent } from './bodi/bodi.component';
import { ComponentFComponent } from './component-f/component-f.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ComponentEComponent,
    ComponentWComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    BodiComponent,
    ComponentFComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
