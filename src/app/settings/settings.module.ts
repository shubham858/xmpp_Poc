import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AppSettingHomeRoutingModule } from './appsetting-routing.module';



@NgModule({
  declarations: [
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    AppSettingHomeRoutingModule
  ]
})
export class SettingsModule { }
