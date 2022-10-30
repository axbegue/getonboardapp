import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedJobsPageComponent } from './selected-jobs-page.component';

const routes: Routes = [{ path: '', component: SelectedJobsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedJobsPageRoutingModule { }
