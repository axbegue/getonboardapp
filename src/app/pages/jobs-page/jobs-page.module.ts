import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsPageRoutingModule } from './jobs-page-routing.module';
import { JobsPageComponent } from './jobs-page.component';


@NgModule({
  declarations: [
    JobsPageComponent
  ],
  imports: [
    CommonModule,
    JobsPageRoutingModule
  ]
})
export class JobsPageModule { }
