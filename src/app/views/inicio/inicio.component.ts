import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

import { PostService } from "src/app/services/post.service";
import { Observable } from 'rxjs';
import { Post } from "../../modelo/post";
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage'
import {HttpClient} from '@angular/common/http';
import {finalize, map} from 'rxjs/operators';




@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"],
})
export class InicioComponent implements OnInit {
  constructor( private postService: PostService,  private router: Router,private route: ActivatedRoute, private auth: AuthService,private afStorage: AngularFireStorage , private http: HttpClient) {}

  posts: any;
 myPosts: any;
 step = 0;
 setStep(index: number) {
  this.step = index;
}
 posts1: Post = {   
  title:null,
  content:null,
  image:null,
  author:null,
  };
  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(["/welcome/login"]);
  }

  agregar(downloadSrc){


    
    this.posts1.image=downloadSrc;
    console.log(this.posts1)
    this.postService.create(this.posts1);
    this.step++;
    this.posts1.title="";
    this.posts1.image="";
    this.posts1.content="";
    this.posts1.author="";
 
   }
   cancelar() {
     this.step++;
     this.posts1.title="";
     this.posts1.image="";
     this.posts1.content="";
     this.posts1.author="";
 
     
   }

   local() {
  this.auth.local();






  

    
  }

 

   
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  select: any;
  url: any;
  upload(event) {


    const id = event.target.files[0].name;
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize(() =>
        this.downloadURL = this.ref.getDownloadURL()
      ))
      .subscribe(result => {

        // tslint:disable-next-line:triple-equals
        if (result.bytesTransferred == result.totalBytes) {
          setTimeout(() => {
             this.ref.getDownloadURL().subscribe(result1 => {

    
             });
        

          }, 200);
        }
      });

      console.log(this.downloadURL)
      console.log(this.uploadState)
      console.log(this.uploadProgress)
      console.log(this.url)
      console.log(this.ref.getDownloadURL())
      console.log(this.ref.getMetadata())
      console.log(this.ref)



  }
}
