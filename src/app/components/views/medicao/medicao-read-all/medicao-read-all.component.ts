import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Obra } from '../../obra/obra.model';
import { ObraService } from '../../obra/obra.service';
import { Medicao } from '../medicao.model';
import { MedicaoService } from '../medicao.service';

@Component({
  selector: 'app-medicao-read-all',
  templateUrl: './medicao-read-all.component.html',
  styleUrls: ['./medicao-read-all.component.css']
})
export class MedicaoReadAllComponent implements OnInit {

  displayedColumns: string[] = [ 'valorMedido','numeroDaMedicao','mesMedicao', 'acoes'];

  id_obra: string = ''

  medicoes: Medicao[] = []

  obra: Obra = {
    id: "",
    nomeObra: "",
    numeroContrato: "",
    empresaExecutora: "",
    nomeFiscal: "",
    processo: "",
    valorExecucaoObra: 0.0,
    qtdAditivoPrazo: 0,
    qtdAditivoValor: 0,
    prazoExecucao: 0,
  };

  constructor(private serviceObra : ObraService,
              private service: MedicaoService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id_obra = this.route.snapshot.paramMap.get('id_obra')!
    this.findAll();
    this.findObra();
  }

  findAll(): void {
    this.service.findAllByObra(this.id_obra).subscribe((resposta) => {
      this.medicoes = resposta
    })
  }

  findObra():void {
    this.serviceObra.findById(this.id_obra).subscribe((resposta) => {
      this.obra = resposta;
    });
  }

  navegarParaCriarMedicao(): void {
    this.router.navigate([`obras/${this.id_obra}/medicoes/create`])
  }
}
