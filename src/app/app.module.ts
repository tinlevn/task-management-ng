import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TaskComponent } from './home/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaskformComponent } from './home/task/taskform/taskform.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatSortModule } from '@angular/material/sort';
import {EnrollmentService} from "./enrollment.service";
import {CommonModule} from "@angular/common";
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    MatSortModule,
    CommonModule,
    MatIconModule
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
