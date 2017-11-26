import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantInfoComponent } from './consultants/consultant-info/consultant-info.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultants', component: ConsultantsComponent },
  { path: 'consultants/:id', component: ConsultantInfoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
