import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NewEspacioComponent } from './componets/new-espacio/new-espacio.component';
import { ListEspaciosComponent } from './componets/list-espacios/list-espacios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListEmployeeComponent,
    HomeComponent,
    AddEmployeeComponent,
    NewEspacioComponent,
    ListEspaciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
