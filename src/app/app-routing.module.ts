import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndodonciaComponent } from './Component/endodoncia/endodoncia.component';
import { ErrorComponent } from './Component/error/error.component';
import { InicioComponent } from './Component/Inicio/inicio/inicio.component';
import { LoginComponent } from './Component/Login/login/login.component';
import { MaxilofacialComponent } from './Component/maxilofacial/maxilofacial.component';
import { NavbarComponent } from './Component/Navbar/navbar/navbar.component';
import { OrtodonciaComponent } from './Component/ortodoncia/ortodoncia.component';
import { RegistroComponent } from './Component/Registro/registro/registro.component';

const routes: Routes = [
  {path:'nav', component:NavbarComponent},
  {path:'inicio', component:InicioComponent},
  {path:'Login', component:LoginComponent},
  {path:'Registro', component:RegistroComponent},
  {path:'ortodoncia', component:OrtodonciaComponent},
  {path:'endodoncia', component:EndodonciaComponent},
  {path:'maxilofacial', component:MaxilofacialComponent},
  {path:'**',component:ErrorComponent}      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
