import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ObraService) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.obra).subscribe((resposta) => {
      console.log(resposta)
    })
  }
}
