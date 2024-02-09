import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderNavbarComponent } from './components/main-header-navbar/main-header-navbar.component';


@NgModule({
  declarations: [
    ShareComponent,
    MainHeaderNavbarComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
