import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Obra } from "../obra.model";
import { ObraService } from "../obra.service";

@Component({
  selector: "app-obra-update",
  templateUrl: "./obra-update.component.html",
  styleUrls: ["./obra-update.component.css"],
})
export class ObraUpdateComponent implements OnInit {
  obra: Obra = {
    id:"",
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
  constructor(
    private service: ObraService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obra.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.obra.id!).subscribe((resposta) => {
      this.obra = resposta;
    });
  }

  update(): void {
    this.service.update(this.obra).subscribe(
      (resposta) => {
        this.router.navigate(["obras"]);
        this.service.mensagem("Obra atualizada com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
      }
    );
  }

  cancelar(): void {
    this.router.navigate(["obras"]);
  }
}
