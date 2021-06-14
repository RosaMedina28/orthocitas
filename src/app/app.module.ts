//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { RegistroComponent } from './Component/Registro/registro/registro.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { NavbarComponent } from './Component/Navbar/navbar/navbar.component';
import { InicioComponent } from './Component/Inicio/inicio/inicio.component';
import { ErrorComponent } from './Component/error/error.component';
import { OrtodonciaComponent } from './Component/ortodoncia/ortodoncia.component';
import { EndodonciaComponent } from './Component/endodoncia/endodoncia.component';
import { MaxilofacialComponent } from './Component/maxilofacial/maxilofacial.component';
import { RouteComponent } from './route/route.component';


@NgModule({
  declarations: [
    //Componentes
    RegistroComponent,
    LoginComponent,
    NavbarComponent,
    InicioComponent,
    ErrorComponent,
    OrtodonciaComponent,
    EndodonciaComponent,
    MaxilofacialComponent,
    RouteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [InicioComponent] //Componente inicial 
})
export class AppModule { }
