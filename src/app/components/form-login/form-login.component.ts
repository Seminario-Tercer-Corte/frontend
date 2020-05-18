import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";

@Component({
  selector: "form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.css"],
})
export class FormLoginComponent implements OnInit {
  username = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  isLoading = false;
  returnUrl: string;
  showMessage = false;
  messageSuccess = false;
  error: string;

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });

  login() {
    this.isLoading = true;
    this.auth
      .login(this.username.value, this.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
         
          if(data.role== "Administrador"){
            this.router.navigate(["/inicio"]);
          }else 
          this.router.navigate(["/usuarios"]);

        },
        (e) => {
          this.error = e.error.message;
          this.showMessage = true;
          this.isLoading = false;
        }
      );
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.auth.currentUserValue) {
      this.router.navigate(["/inicio"]);
      
    }
  }

  logingoogle() {
    try {
      this.auth.loginGoogle();
    } catch (error) {
      console.log(error);
    }
  }
  prueba(){

   



  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/inicio";
  }
}
