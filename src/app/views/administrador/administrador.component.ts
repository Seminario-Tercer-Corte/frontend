import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { PostService } from "src/app/services/post.service";
import { TeamService } from "src/app/services/team.service";

import { Observable } from 'rxjs';
import { User } from "../../modelo/user";
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

  this.auth.profile().subscribe((data) => {console.log(data) 
  
    this.profile = data;
  
  }

  
  
  
  );






}
nombre=null;
email=null;

photo=null;

  team2 = [];
  team3 =[];
  profile:any={};
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

  user1: User = {
    id: null,
    name: null,
    username:null,
    password:null,
    picture:null,
   team:{id:null}
  };

 logout() {
    this.auth.logout();
    this.router.navigate(["/welcome/login"]);
   this.nombre=null
   this.email=null
   this.photo=null

  }

  agregarteam(){

    this.user1.id=this.profile.id
    this.user1.name=this.profile.name
    this.user1.username=this.profile.username
    this.user1.picture=this.profile.picture

    this.user1.team.id=this.team1.id
    console.log(this.user1)

this.te.editarOrganization(this.user1)


  }
  prueba1(){

    console.log(localStorage)
   console.log( JSON.parse(localStorage.getItem("currentAuth")))
 


  }

  infor(team){


    this.team1=team

  }
}
