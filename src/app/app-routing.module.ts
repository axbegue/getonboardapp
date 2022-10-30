import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home-page').then(m => m.HomePageModule) },
  { path: 'home', loadChildren: () => import('./pages/home-page').then(m => m.HomePageModule) }, 
  { path: 'jobs', loadChildren: () => import('./pages/jobs-page').then(m => m.JobsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login-page').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./pages/register-page').then(m => m.RegisterPageModule) },
  { path: 'selected_jobs', loadChildren: () => import('./pages/selected-jobs-page').then(m => m.SelectedJobsPageModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
