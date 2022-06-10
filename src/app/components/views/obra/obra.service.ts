import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Obra} from './obra.model'

@Injectable({
  providedIn: 'root'
})
export class ObraService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Obra[]>{
      const url = `${this.baseUrl}/obras`
      return this.http.get<Obra[]>(url)
  }
   
}
