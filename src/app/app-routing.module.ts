import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'extrato', component: ExtratoComponent}
    ],
    canActivate: [AuthGuard]

  },
  {
    path: '', component: LoginComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
