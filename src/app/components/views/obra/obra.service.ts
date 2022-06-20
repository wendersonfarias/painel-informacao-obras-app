import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Obra} from './obra.model'

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  findAll(): Observable<Obra[]>{
      const url = `${this.baseUrl}/obras`
      return this.http.get<Obra[]>(url)
  }

  create(obra: Obra): Observable<Obra>{
    const url = `${this.baseUrl}/obras`
    return this.http.post<Obra>(url, obra);
  }
   


  mensagem(str: String): void {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }


}
