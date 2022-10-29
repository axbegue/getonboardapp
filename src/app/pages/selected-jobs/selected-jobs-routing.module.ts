import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedJobsComponent } from './selected-jobs.component';

const routes: Routes = [{ path: '', component: SelectedJobsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedJobsRoutingModule { }
