import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeuillePresenceComponent } from './feuille-presence/feuille-presence.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ResetPComponent } from './reset-p/reset-p.component';
import { NgChartsModule } from 'ng2-charts';
import {ChartModule} from 'angular-highcharts';
import { ClientComponent } from './client/client.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestComponent } from './test/test.component';
import { EditComponent } from './edit/edit.component';
import {MatDialogModule} from '@angular/material/dialog' ;
import {MatButtonModule} from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashbordComponent } from './dashbord/dashbord.component';









@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        RegisterComponent,
        HeaderComponent,
        LoginComponent,
        FeuillePresenceComponent,
        WelcomeComponent,
        ResetPComponent,
        ClientComponent,
        TestComponent,
        EditComponent,
        DashbordComponent,
        
        


    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgChartsModule,
        ChartModule, 
        MatSlideToggleModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,

       
       

    ],
})
export class AppModule { }
