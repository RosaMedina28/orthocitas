import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './Component/error/error.component';
import { InicioComponent } from './Component/Inicio/inicio/inicio.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { NavbarComponent } from './Component/Navbar/navbar/navbar.component';
import { RegistroComponent } from './Component/Registro/registro/registro.component';

const routes: Routes = [
  {path:'nav', component:NavbarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'Login', component:LoginComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'**',component:ErrorComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
