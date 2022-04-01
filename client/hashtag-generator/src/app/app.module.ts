import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashtagCopyFieldComponent } from './hashtag-copy-field/hashtag-copy-field.component';
import { HashtagInputComponent } from './hashtag-input/hashtag-input.component';
import { HashtagManagerComponent } from './hashtag-manager/hashtag-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HashtagCopyFieldComponent,
    HashtagInputComponent,
    HashtagManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
