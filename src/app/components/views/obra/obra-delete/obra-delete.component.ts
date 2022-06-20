import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Obra } from '../obra.model';
import { ObraService } from '../obra.service';

@Component({
  selector: 'app-obra-delete',
  templateUrl: './obra-delete.component.html',
  styleUrls: ['./obra-delete.component.css']
})
export class ObraDeleteComponent implements OnInit {

  obra: Obra = {
    id : '',
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
  constructor(private service: ObraService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.obra.id! = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.obra.id!).subscribe((resposta) => {
      this.obra = resposta
      console.log(this.obra)
    })
  }
  
  delete() :void {
    this.service.delete(this.obra.id!).subscribe((resposta) => {
      this.router.navigate(['obras'])
      this.service.mensagem('Obra deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancelar(): void {
    this.router.navigate(['obras'])
  }

}
