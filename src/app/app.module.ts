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
import { DeletetaskComponent } from './home/deletetask/deletetask.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskformComponent,
    HomeComponent,
    DeletetaskComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
