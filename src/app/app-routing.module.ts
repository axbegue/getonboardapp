import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'jobs', loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'selected_jobs', loadChildren: () => import('./pages/selected-jobs/selected-jobs.module').then(m => m.SelectedJobsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
