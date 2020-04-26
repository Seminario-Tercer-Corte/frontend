import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  API_URI = 'https://seminario-tercer-corte.herokuapp.com';

  constructor(private http: HttpClient) { }

  gerGreting(){
    return this.http.get(`${this.API_URI}/greeting`);
  }



}






