import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicao } from '../medicao.model';
import { MedicaoService } from '../medicao.service';

@Component({
  selector: 'app-medicao-update',
  templateUrl: './medicao-update.component.html',
  styleUrls: ['./medicao-update.component.css']
})
export class MedicaoUpdateComponent implements OnInit {
  id_obra: string = "";

  medicao: Medicao = {
    id: "",
    valorMedido: 0.0,
    numeroMedicao: 0,
    mesMedicao: "",
  };

  valor = new FormControl(0, [Validators.min(1)]);

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

  update() :void {
    this.service.update(this.medicao).subscribe((resposta) => {
      this.router.navigate([`obras/${this.id_obra}/medicoes`]);
      this.service.mensagem("Medição atualizada com sucesso!")
    }, err =>{
      this.router.navigate([`obras/${this.id_obra}/medicoes`]);
      this.service.mensagem("Falha ao atualizar a Medição! Tente Novamente mais tarde...")
    })
  }

  cancelar(): void {
    this.router.navigate([`obras/${this.id_obra}/medicoes`]);
  }

  getMessage() {
    if (this.valor.invalid) {
      return "O campo Valor da Medição deve ser Maior que 0";
    }
    return false;
  }
}
