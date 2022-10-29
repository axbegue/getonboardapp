import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedJobsRoutingModule } from './selected-jobs-routing.module';
import { SelectedJobsComponent } from './selected-jobs.component';


@NgModule({
  declarations: [
    SelectedJobsComponent
  ],
  imports: [
    CommonModule,
    SelectedJobsRoutingModule
  ]
})
export class SelectedJobsModule { }
