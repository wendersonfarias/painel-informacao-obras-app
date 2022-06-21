import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Medicao } from "./medicao.model";

@Injectable({
  providedIn: "root",
})
export class MedicaoService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAllByObra(id_obra: string): Observable<Medicao[]> {
    const url = `${this.baseUrl}/medicoes?obra=${id_obra}`;
    return this.http.get<Medicao[]>(url);
  }

  findById(id: string): Observable<Medicao> {
    const url = `${this.baseUrl}/medicoes/${id}`;
    return this.http.get<Medicao>(url);
  }

  update(medicao: Medicao): Observable<Medicao> {
    const url = `${this.baseUrl}/medicoes/${medicao.id}`;
    return this.http.put<Medicao>(url, medicao);
  }

  create(medicao: Medicao, id_obra: string): Observable<Medicao> {
    const url = `${this.baseUrl}/medicoes?obra=${id_obra}`;
    return this.http.post<Medicao>(url, medicao);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
