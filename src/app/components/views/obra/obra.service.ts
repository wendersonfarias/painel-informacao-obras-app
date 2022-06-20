import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Obra } from "./obra.model";

@Injectable({
  providedIn: "root",
})
export class ObraService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Obra[]> {
    const url = `${this.baseUrl}/obras`;
    return this.http.get<Obra[]>(url);
  }

  findById(id: String): Observable<Obra> {
    const url = `${this.baseUrl}/obras/${id}`;
    return this.http.get<Obra>(url);
  }

  create(obra: Obra): Observable<Obra> {
    const url = `${this.baseUrl}/obras`;
    return this.http.post<Obra>(url, obra);
  }

  delete(id: String): Observable<void> {
    const url = `${this.baseUrl}/obras/${id}`;
    return this.http.delete<void>(url);
  }

  updatePut(obra: Obra): Observable<void> {
    const url = `${this.baseUrl}/obras/${obra.id}`;
    return this.http.put<void>(url, obra);
  }
  update(obra: Obra): Observable<void> {
    const url = `${this.baseUrl}/obras/${obra.id}`;
    return this.http.patch<void>(url, obra);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000,
    });
  }
}
