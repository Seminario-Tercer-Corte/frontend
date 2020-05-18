import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { constants } from "../../app/utils/constants";
import { organizacion } from '../modelo/organizacion';

const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  constructor(private http: HttpClient) { }

  getOrganizations() {
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken1"])
    return this.http.get(`${constants.organizationAll}`, cabecera);
  }

  registroOrganization(organizacion: organizacion) {
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
    return this.http.post<organizacion>(`${constants.organizationSave}`, organizacion, cabecera).subscribe(response => {

      // You can access status:
      console.log(response);
    });
  }

  editarOrganization(organizacion) {
    console.log(".................");
    console.log(organizacion);
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
    return this.http.put<organizacion>(`${constants.organizationUpdate}`, organizacion, cabecera).subscribe(response => {
      // You can access status:
      console.log(response);
    });
  }

  eliminarOrganization(idOrganizacion) {
    cabecera.headers.set('Authorization', 'Bearer ' + JSON.parse(localStorage.getItem("currentAuth"))["accessToken"])
    return this.http.delete(`${constants.organizationDelete}` + idOrganizacion, cabecera).subscribe(response => {

      // You can access status:
      console.log(response);
    });
  }
}
