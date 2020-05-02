import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./views/inicio/inicio.component";
import { LoginComponent } from "./views/login/login.component";
import { RegistrarComponent } from "./views/registrar/registrar.component";
import { PerfilComponent } from "./views/perfil/perfil.component";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { FormRegisterComponent } from "./components/form-register/form-register.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome/login",
    pathMatch: "full",
  },
  {
    path: "welcome",
    component: LoginComponent,
    children: [
      {
        path: "login",
        component: FormLoginComponent,
      },
      {
        path: "register",
        component: FormRegisterComponent,
      },
    ],
  },
  {
    path: "inicio",
    component: InicioComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
