import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { MedicaoCreateComponent } from './components/views/medicao/medicao-create/medicao-create.component';
import { MedicaoReadAllComponent } from './components/views/medicao/medicao-read-all/medicao-read-all.component';
import { MedicaoUpdateComponent } from './components/views/medicao/medicao-update/medicao-update.component';
import { ObraCreateComponent } from './components/views/obra/obra-create/obra-create.component';
import { ObraDeleteComponent } from './components/views/obra/obra-delete/obra-delete.component';
import { ObraReadComponent } from './components/views/obra/obra-read/obra-read.component';
import { ObraUpdateComponent } from './components/views/obra/obra-update/obra-update.component';
import { ObraVisualizaComponent } from './components/views/obra/obra-visualiza/obra-visualiza.component';

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
  },
  {
    path: 'obras/update/:id',
    component : ObraUpdateComponent
  },
  {
    path: 'obras/visualizar/:id',
    component : ObraVisualizaComponent
  },
  {
    path: 'obras/:id_obra/medicoes',
    component: MedicaoReadAllComponent
  },
  {
    path: 'obras/:id_obra/medicoes/create',
    component : MedicaoCreateComponent
  },
  {
    path : 'obras/:id_obra/medicoes/:id/update',
    component: MedicaoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
