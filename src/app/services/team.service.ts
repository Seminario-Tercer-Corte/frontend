import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { team } from "../../app/modelo/team";


const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  API_URI = 'https://seminario-tercer-corte.herokuapp.com';
  

  constructor(private http: HttpClient) { }

  gerGreting(){
cabecera.headers.set( 'Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken1"])
   

     return this.http.get(`${this.API_URI}/api/v1/teams/all`,cabecera);
  }
 
  registroteam(team : team): Observable<any> {
    console.log(team )
cabecera.headers.set( 'Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
try {  return this.http.post<team>(`${this.API_URI}/api/v1/teams/save`,team ,cabecera);}  catch (error) {
  console.log(error);
}
  }

}

