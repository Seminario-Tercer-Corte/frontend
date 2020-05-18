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
import { PaginaprincipalComponent } from './views/paginaprincipal/paginaprincipal.component';
import { FormsModule } from '@angular/forms';
// FireBase Imports
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth'


import { environment } from '../environments/environment'

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InformacionComponent } from './views/informacion/informacion.component';
import { SegundatempoComponent } from './views/segundatempo/segundatempo.component';
import { AdministradorComponent } from './views/administrador/administrador.component';
import {MatMenuModule} from '@angular/material/menu';




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
    PaginaprincipalComponent,
    InformacionComponent,
    SegundatempoComponent,
    AdministradorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
