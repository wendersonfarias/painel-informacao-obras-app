import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicao } from '../medicao.model';
import { MedicaoService } from '../medicao.service';

@Component({
  selector: 'app-medicao-delete',
  templateUrl: './medicao-delete.component.html',
  styleUrls: ['./medicao-delete.component.css']
})
export class MedicaoDeleteComponent implements OnInit {
  id_obra: string = "";

  medicao: Medicao = {
    id: "",
    valorMedido: 0.0,
    numeroMedicao: 0,
    mesMedicao: "",
  };

  constructor(
    private service: MedicaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_obra = this.route.snapshot.paramMap.get("id_obra")!;
    this.medicao.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById():void {
    this.service.findById(this.medicao.id!).subscribe((resposta) =>{
      this.medicao = resposta;
    })
  }

  delete(): void {
    this.service.delete(this.medicao.id!).subscribe((resposta) =>{
      this.router.navigate([`obras/${this.id_obra}/medicoes`]);
      this.service.mensagem("Medição deletada com sucesso!")
    }, err => {
      console.log(this.medicao)
      this.router.navigate([`obras/${this.id_obra}/medicoes`]);
      this.service.mensagem("Falha ao deletar a Medição! Tente mais tarde...")
    })
  }

  cancelar(): void {
    this.router.navigate([`obras/${this.id_obra}/medicoes`]);
  }

}
