import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BookAddComponent } from './book-add/book-add.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookEditComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
