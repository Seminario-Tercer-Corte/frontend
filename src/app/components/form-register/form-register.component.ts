import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-form-register",
  templateUrl: "./form-register.component.html",
  styleUrls: ["./form-register.component.css"],
})
export class FormRegisterComponent implements OnInit {
  name = new FormControl("", Validators.required);
  username = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  isLoading = false;
  showMessage = false;
  message = "";
  messageSuccess = true;

  registerForm = new FormGroup({
    name: this.name,
    username: this.username,
    password: this.password,
  });

  signup() {
    this.isLoading = true;
    this.auth
      .signup({
        name: this.password.value,
        username: this.username.value,
        password: this.password.value,
      })
      .pipe(first())
      .subscribe(
        (data) => {
          this.message = "Se ha registrado exitosamente";
          this.showMessage = true;
          this.isLoading = false;
          this.registerForm.reset();
        },
        (e) => {
          this.message = e.error.message;
          this.messageSuccess = false;
          this.showMessage = true;
          this.isLoading = false;
        }
      );
  }

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
