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

  this.te.getteams().subscribe((data: any[]) => {
    console.log(data);
    this.team2 = data;

  })

  this.auth.profile().subscribe((data: any[]) => {
    console.log(data);
    this.profile = data;

  })





}
nombre=null;
email=null;

photo=null;

  team2 = [];
  team3 =[];
  profile=[];
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




  


  }
  prueba1(){

    console.log(localStorage)
   console.log( JSON.parse(localStorage.getItem("currentAuth")))
 


  }

  infor(team){


    this.team1=team

  }
}
