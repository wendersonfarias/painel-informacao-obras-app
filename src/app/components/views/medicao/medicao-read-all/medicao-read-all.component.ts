import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { Obra } from "../../obra/obra.model";
import { ObraService } from "../../obra/obra.service";
import { Medicao } from "../medicao.model";
import { MedicaoService } from "../medicao.service";

@Component({
  selector: "app-medicao-read-all",
  templateUrl: "./medicao-read-all.component.html",
  styleUrls: ["./medicao-read-all.component.css"],
})
export class MedicaoReadAllComponent implements AfterViewInit {
  
  medicoes: Medicao[] = [];

  displayedColumns: string[] = ['valorMedido','numeroDaMedicao','mesMedicao','acoes'];
  

  dataSource = new MatTableDataSource<Medicao>(this.medicoes);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  id_obra: string = "";

  

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
    valorLiberado: 0.0
  };

  constructor(
    private serviceObra: ObraService,
    private service: MedicaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.id_obra = this.route.snapshot.paramMap.get("id_obra")!;
    this.findAll();
    this.findObra();
  }

  findAll(): void {
    this.service.findAllByObra(this.id_obra).subscribe((resposta) => {
      this.medicoes = resposta;
      this.dataSource = new MatTableDataSource<Medicao>(this.medicoes);
      this.dataSource.paginator = this.paginator;});
  }

  findObra(): void {
    this.serviceObra.findById(this.id_obra).subscribe((resposta) => {
      this.obra = resposta;
    });
  }

  navegarParaCriarMedicao(): void {
    this.router.navigate([`obras/${this.id_obra}/medicoes/create`]);
  }
  voltar(): void {
    this.router.navigate([`obras/visualizar/${this.id_obra}`]);
  }
}
