import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { team } from "../../app/modelo/team";
import { User } from "../../app/modelo/user";

import { constants } from "../../app/utils/constants";


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }

  getteams() {
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken1"])
    return this.http.get(`${constants.teamAll}`, cabecera);
  }

  registroteam(team: team) {
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
    return this.http.post<team>(`${constants.teamSave}`, team, cabecera).subscribe(response => {

      // You can access status:
      console.log(response);
    });
  }

  eliminarteam(idteam) {
    console.log(idteam)
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken1"])
    return this.http.delete(`${constants.teamDelete}`+idteam, cabecera).subscribe(response => {

      // You can access status:
      console.log(response);
    });
  }


  editar(team) {
    console.log(team)
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken1"])
    return this.http.put<team>(`${constants.teamUpdate}`,team, cabecera).subscribe(response => {

      // You can access status:
      console.log(response);
    });
  }

  editarOrganization(User) {
    console.log(".................");
    console.log(User);
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
    return this.http.put<User>(`${constants.updateteam}`, User, cabecera).subscribe(response => {
      // You can access status:
      console.log(response);
    });
  }





}

