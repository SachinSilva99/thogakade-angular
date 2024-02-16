import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { InputComponent } from './components/input/input.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ShareComponent,
    InputComponent,

  ],
  exports: [
    InputComponent,

  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ShareModule { }
