import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { ObraCreateComponent } from './components/views/obra/obra-create/obra-create.component';
import { ObraDeleteComponent } from './components/views/obra/obra-delete/obra-delete.component';
import { ObraReadComponent } from './components/views/obra/obra-read/obra-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'obras',
    component: ObraReadComponent
  },
  {
    path: 'obras/create',
    component: ObraCreateComponent
  },
  {
    path: 'obras/delete/:id',
    component : ObraDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
