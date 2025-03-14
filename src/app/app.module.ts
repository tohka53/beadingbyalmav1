import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { CatalogoComponent } from './catalogo/catalogo/catalogo.component';
import { HetComponent } from './het/het/het.component';
import { FetComponent } from './fet/fet/fet.component';
import { ColaComponent } from './cola/cola/cola.component';
import { inject } from '@vercel/analytics';
import { BlogComponent } from './blog/blog/blog.component';
inject();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CatalogoComponent,
    HetComponent,
    FetComponent,
    ColaComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
