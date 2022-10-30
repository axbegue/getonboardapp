import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedJobsPageRoutingModule } from './selected-jobs-page-routing.module';
import { SelectedJobsPageComponent } from './selected-jobs-page.component';


@NgModule({
  declarations: [
    SelectedJobsPageComponent
  ],
  imports: [
    CommonModule,
    SelectedJobsPageRoutingModule
  ]
})
export class SelectedJobsPageModule { }
