import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Medicao } from "../medicao.model";
import { MedicaoService } from "../medicao.service";

@Component({
  selector: "app-medicao-create",
  templateUrl: "./medicao-create.component.html",
  styleUrls: ["./medicao-create.component.css"],
})
export class MedicaoCreateComponent implements OnInit {
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
  }

  create(): void {
    this.service.create(this.medicao, this.id_obra).subscribe(
      (resposta) => {
        this.router.navigate([`obras/${this.id_obra}/medicoes`]);
        this.service.mensagem("Medição criada com sucesso!");
      },
      (err) => {
        console.log(this.medicao.mesMedicao);
        this.router.navigate([`obras/${this.id_obra}/medicoes`]);
        this.service.mensagem("Erro ao criar uma nova MEDIÇÃO!");
      }
    );
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
