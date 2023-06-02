import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { MedicineFormComponent } from './medicine-form/medicine-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    LoginComponent,
    MedicineComponent,
    UserlistComponent,
    UserdetailsComponent,
    EditMedicineComponent,
    EditUserComponent,
    MedDetailsComponent,
    MedicineFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
