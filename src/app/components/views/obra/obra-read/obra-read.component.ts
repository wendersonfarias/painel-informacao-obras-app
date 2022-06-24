import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Obra } from '../obra.model';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-read',
  templateUrl: './obra-read.component.html',
  styleUrls: ['./obra-read.component.css']
})
export class ObraReadComponent implements AfterViewInit {

  obras: Obra[] = [];

  displayedColumns: string[] = [ 'abrir','nomeObra', 'numeroContrato', 'empresaExecutora','prazoExecucao', 'valorExecucaoObra', 'valorLiberado'];
  dataSource = new MatTableDataSource<Obra>(this.obras);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ObraService, private router: Router){}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.obras = resposta
      this.dataSource = new MatTableDataSource<Obra>(this.obras);
      this.dataSource.paginator = this.paginator;});
  }

  navegarParaObraCreate(){
    this.router.navigate(["obras/create"])
  }
  voltar(){
    this.router.navigate([""])
  }
}