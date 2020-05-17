import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  API_URI = 'https://seminario-tercer-corte.herokuapp.com';

  constructor(private http: HttpClient) { }

  gerGreting(){
console.log(localStorage)  }



}

