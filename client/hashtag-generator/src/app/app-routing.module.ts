import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagManagerComponent } from './hashtag-manager/hashtag-manager.component';

const routes: Routes = [
  { path: '', component: HashtagManagerComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
