import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppHomeRoutingModule } from './apphome-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppHomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [DashboardComponent]
})
export class HomeModule { }
