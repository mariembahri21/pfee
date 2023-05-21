import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditComponent } from './edit/edit.component';
import { FeuillePresenceComponent } from './feuille-presence/feuille-presence.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPComponent } from './reset-p/reset-p.component';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : "home", component: UsersComponent},
  {path : "page2", component: RegisterComponent},
  {path : "log", component: LoginComponent},
  {path : "feuillePresence", component : FeuillePresenceComponent},
  {path : "welcomePage", component: WelcomeComponent},
  {path : "users", component: ResetPComponent},
  {path : "test", component: DashbordComponent},
  {path : "client", component: ClientComponent},
  {path : "test", component: TestComponent},
  {path : "modifier", component: EditComponent},
  {path : "dashbord", component: HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
