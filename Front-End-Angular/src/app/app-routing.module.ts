import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/iniciar-sesion/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path: '', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
