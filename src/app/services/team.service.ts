import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { team } from "../../app/modelo/team";
import { constants } from "../../app/utils/constants";


const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) { }

  gerGreting() {
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

}

