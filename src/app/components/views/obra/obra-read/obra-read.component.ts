import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obra } from '../obra.model';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-read',
  templateUrl: './obra-read.component.html',
  styleUrls: ['./obra-read.component.css']
})
export class ObraReadComponent implements OnInit {

  obras: Obra[] = []

  displayedColumns: string[] = [ 'nomeObra', 'numeroContrato', 'empresaExecutora','prazoExecucao', 'valorExecucaoObra','valorLiberado', 'acoes'];
  
  constructor(private service: ObraService, private router:Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.obras = resposta});
  }


  navegarParaObraCreate(){
    this.router.navigate(["obras/create"])
  }
}
