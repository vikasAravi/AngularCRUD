import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//httpClient Module fpr Restful API
import { HttpClientModule } from '@angular/common/http';

//Forms Module
import { FormsModule } from '@angular/forms';

//Routing module for router serivice
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Components
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
