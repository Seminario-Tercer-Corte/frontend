import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { PostService } from "src/app/services/post.service";
import { TeamService } from "src/app/services/team.service";

import { Observable } from 'rxjs';
import { Post } from "../../modelo/post";
import { team } from "../../modelo/team";

import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor(
    private postService: PostService,
    private te: TeamService,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private afStorage: AngularFireStorage,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  console.log( JSON.parse(localStorage.user))
 this.nombre=JSON.parse(localStorage.user)["displayName"]
  this.email=JSON.parse(localStorage.user)["email"]
this.photo=JSON.parse(localStorage.user)["photoURL"]

  this.te.getteams().subscribe((data: any[]) => {
    console.log(data);
    this.team2 = data;

  })





}
nombre=null;
email=null;

photo=null;

  team2 = [];
  team3 =[];
  mostrar1=true;
  mostrar2=false;
  mostrar3=false;

 



  team1: team = {
    description: null,
    email: null,
    game: null,
    name: null,
    ubication: null
  };

 logout() {
    this.auth.logout();
    this.router.navigate(["/welcome/login"]);
   this.nombre=null
   this.email=null
   this.photo=null

  }

  prueba(){

    console.log(this.nombre)
    console.log(this.email)
    console.log(this.photo)




  }

  infor(team){


    this.team1=team

  }
}
