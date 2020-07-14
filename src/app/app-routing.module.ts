import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookAddComponent} from './book-add/book-add.component';

const routes: Routes = [
  {
  path: 'book', component: BookComponent
  },
  {
    path: 'book/add', component: BookAddComponent
  },
  {
    path: 'book/:id', component: BookDetailComponent
  },
  {
    path: 'book/:id/edit', component: BookEditComponent
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
