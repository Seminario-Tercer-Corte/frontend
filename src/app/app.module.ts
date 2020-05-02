import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InicioComponent } from "./views/inicio/inicio.component";
import { LoginComponent } from "./views/login/login.component";
import { RegistrarComponent } from "./views/registrar/registrar.component";
import { PerfilComponent } from "./views/perfil/perfil.component";
import { InputTextComponent } from "./components/input-text/input-text.component";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistrarComponent,
    PerfilComponent,
    InputTextComponent,
    FormLoginComponent,
    FormRegisterComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
