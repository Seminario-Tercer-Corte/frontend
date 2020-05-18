import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { map, first } from "rxjs/operators";
import { constants } from "../utils/constants";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import * as firebase from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { User } from "../../app/modelo/user";




@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  authState: any = null;
  Authorization: any = null;


  constructor(
    private http: HttpClient,
    public afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.afAuth.authState.subscribe((data) => (this.authState = data));

    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentAuth"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  async loginGoogle() {
    console.log("busqueda1");
    try {
      const authGoogle = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      console.log(authGoogle);
      this.loginWithGoogle(authGoogle.user)
        .pipe(first())
        .subscribe(
          (data) => {
            if(data.role== "Administrador"){
              this.router.navigate(["/inicio"]);
            }else 
            this.router.navigate(["/usuarios"]);


          },
          (e) => {
         

          }
        );

    } catch (error) {
      console.log(error);
    }
  }

  async busqueda() {
    this.afAuth.authState.subscribe((data) => (this.authState = data));
    console.log(this.authState);
  }

  async logout1(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  local() {
    console.log(localStorage);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(constants.loginUrl, {
        username,
        password,
      })
      .pipe(
        map((data) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentAuth", JSON.stringify(data));
          this.currentUserSubject.next(data);
          console.log(data)
          return data;
        })  
      );
  }

  loginWithGoogle(user: any) {
    return this.http
      .post<any>(constants.loginGoogle, {
        name: user.displayName,
        username: user.email,
        password: user.email,
        picture: user.photoURL,
      })
      .pipe(
        map((data) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentAuth", JSON.stringify(data));
          this.currentUserSubject.next(data);
         return data;
        })
      );
  }

  signup(body: any) {
    return this.http.post<any>(constants.registerUrl, body).pipe(
      map((data) => {
        return data;
      })
    );
  }

  logout() {
    // remove user from local storage to log user out
    this.logout1();
    localStorage.removeItem("currentAuth");
    this.currentUserSubject.next(null);
  }



  profile() {
    return this.http.get(`${constants.profile}`, {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("currentAuth"))["accessToken"],
      },
    });
  }

}
