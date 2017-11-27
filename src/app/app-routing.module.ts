import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConsultantsComponent } from './consultants/consultants.component';
import { ConsultantInfoComponent } from './consultants/consultant-info/consultant-info.component';
import { NewCommentComponent } from './consultants/consultant-info/consultant-comments/new-comment/new-comment.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultants', component: ConsultantsComponent },
  { path: 'consultants/:id', component: ConsultantInfoComponent },
  { path: 'consultants/:id/new', component: NewCommentComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
