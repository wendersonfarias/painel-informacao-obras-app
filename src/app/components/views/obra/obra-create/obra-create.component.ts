import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Obra } from '../obra.model';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-create',
  templateUrl: './obra-create.component.html',
  styleUrls: ['./obra-create.component.css']
})
export class ObraCreateComponent implements OnInit {
  
  obra: Obra = {
    nomeObra: '',
    numeroContrato: '',
    empresaExecutora:'',
    nomeFiscal: '',
    processo : '',
    valorExecucaoObra: 0.0,
    qtdAditivoPrazo : 0,
    qtdAditivoValor: 0,
    prazoExecucao: 0,
  };

  constructor(private service: ObraService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.obra).subscribe((resposta) => {
      this.router.navigate(['obras']);
      this.service.mensagem('Obra criada com sucesso!');
    }, err => {
      for(let i = 0; i< err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }
}
