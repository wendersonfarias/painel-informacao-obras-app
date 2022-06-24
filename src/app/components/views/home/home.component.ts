import { Component, OnInit } from "@angular/core";
import { Color, ScaleType } from "@swimlane/ngx-charts";
import { Dados } from "./dados.model";
import { const_single } from "./data";
import { homeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  data: Dados[] = [];
  single: any;

  view: [number, number] = [700, 400];

  colorScheme: Color = {
    group: ScaleType.Linear,
    name: "teste",
    selectable: true,
    domain: ["#5AA454", "#E44D25", "#CFC0BB"],
  };
  cardColor: string = "#232837";

  constructor(private service: homeService) {
    // this.single = this.dados;
    //Object.assign(this, { single });
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.data = resposta;

      this.single = resposta;
      console.log(this.data);
    });
  }
}
