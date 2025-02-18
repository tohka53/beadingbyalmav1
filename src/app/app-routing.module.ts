import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },  
  {
    path: 'about',
    loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule)
  }, 
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo/catalogo.module').then(m => m.CatalogoModule)
  }, 
  {
    path: 'cola',
    loadChildren: () => import('./catalogo/catalogo/catalogo.module').then(m => m.CatalogoModule)
  }, 
  {
    
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
