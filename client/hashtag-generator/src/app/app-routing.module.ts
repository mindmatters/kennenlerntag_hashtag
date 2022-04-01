import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagCopyFieldComponent } from './hashtag-copy-field/hashtag-copy-field.component';

const routes: Routes = [
  { path: '', component: HashtagCopyFieldComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
