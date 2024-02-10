import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MainHeaderNavbarComponent } from './components/main-header-navbar/main-header-navbar.component';
import { InputComponent } from './components/input/input.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ShareComponent,
    MainHeaderNavbarComponent,
    InputComponent,

  ],
  exports: [
    InputComponent,
    MainHeaderNavbarComponent,

  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
