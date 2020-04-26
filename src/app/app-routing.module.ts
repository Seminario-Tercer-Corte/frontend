
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';





const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
    pathMatch: 'full'
  },

  {
    path: 'inicio',
    component:  InicioComponent  ,

  },
  {
    path: 'inicio/perfil',
    component:  PerfilComponent  ,

  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }