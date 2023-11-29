import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { UserInfoPageComponent } from './pages/userInfoPage/userInfoPage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';


@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
