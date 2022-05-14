import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuteticationRoutingModule } from './autetication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { SigninComponent } from './components/signin/signin.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuteticationRoutingModule
  ]
})
export class AuteticationModule { }
