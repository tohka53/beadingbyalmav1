import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaComponent } from './cola.component';

const routes: Routes = [
  {
    path: '',
    component: ColaComponent  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaRoutingModule { }
