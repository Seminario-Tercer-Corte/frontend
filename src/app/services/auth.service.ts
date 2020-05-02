import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { constants } from "../utils/constants";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentAuth"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
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
    localStorage.removeItem("currentAuth");
    this.currentUserSubject.next(null);
  }
}
