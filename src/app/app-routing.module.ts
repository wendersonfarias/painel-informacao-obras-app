import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
