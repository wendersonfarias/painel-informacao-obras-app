import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@angular/material/toolbar";
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from './components/views/home/home.component';
import {MatTableModule} from '@angular/material/table';
import { ObraReadComponent } from './components/views/obra/obra-read/obra-read.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ObraCreateComponent } from './components/views/obra/obra-create/obra-create.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ObraDeleteComponent } from './components/views/obra/obra-delete/obra-delete.component';
import { ObraUpdateComponent } from './components/views/obra/obra-update/obra-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ObraVisualizaComponent } from './components/views/obra/obra-visualiza/obra-visualiza.component';
import { MedicaoReadAllComponent } from './components/views/medicao/medicao-read-all/medicao-read-all.component';
import { MedicaoCreateComponent } from './components/views/medicao/medicao-create/medicao-create.component';
import { MedicaoUpdateComponent } from './components/views/medicao/medicao-update/medicao-update.component';
import { MedicaoDeleteComponent } from './components/views/medicao/medicao-delete/medicao-delete.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavComponent, HomeComponent, ObraReadComponent, ObraCreateComponent, ObraDeleteComponent, ObraUpdateComponent, ObraVisualizaComponent, MedicaoReadAllComponent, MedicaoCreateComponent, MedicaoUpdateComponent, MedicaoDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
