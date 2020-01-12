import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AuthenticationRoutes} from './authentication.routing';
import {ErrorComponent} from './components/error/error.component';
import {ForgotComponent} from './components/forgot/forgot.component';
import {LockscreenComponent} from './components/lockscreen/lockscreen.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MaterialImportsModule} from '../imports/material-imports.module';
import {UtilsModule} from '../utils/utils.module';

@NgModule({
  imports: [
    UtilsModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MaterialImportsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorComponent,
    ForgotComponent,
    LockscreenComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule {
}
