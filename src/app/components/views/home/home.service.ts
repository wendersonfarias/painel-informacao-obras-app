import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Dados } from "./dados.model";

@Injectable({
  providedIn: 'root'
})
export class homeService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

  findAll(): Observable<Dados[]> {
    const url = `${this.baseUrl}/obras/info`;
    return this.http.get<Dados[]>(url);
 }

}



  

