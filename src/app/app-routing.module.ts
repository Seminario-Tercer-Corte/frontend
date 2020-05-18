import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./views/inicio/inicio.component";
import { LoginComponent } from "./views/login/login.component";
import { PaginaprincipalComponent} from "./views/paginaprincipal/paginaprincipal.component";
import { InformacionComponent} from "./views/informacion/informacion.component";
import { AdministradorComponent} from "./views/administrador/administrador.component";



import { RegistrarComponent } from "./views/registrar/registrar.component";
import { PerfilComponent } from "./views/perfil/perfil.component";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { FormRegisterComponent } from "./components/form-register/form-register.component";
import { AuthGuard } from "./guards/auth.guard";



const routes: Routes = [
  {
    path: "",
    redirectTo: "principal",
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

  {
    path: "principal",
    component: PaginaprincipalComponent,
   
  },
  {
    path: "informacion",
    component: InformacionComponent,
   
  },
  {
    path: "usuarios",
    component: AdministradorComponent,
    canActivate: [AuthGuard],
   
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
