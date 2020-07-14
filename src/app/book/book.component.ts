import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Book} from '../../../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book [] = [];
  bookForm: FormGroup;
  numberOfBook: number;
  constructor(private bookService: BookServiceService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.bookService.getPost()
      .subscribe(next => (this.books = next), error => (this.books = []));
    console.log(this.books);
  }
  deleteBook(i): void{
    if (confirm('Are you sure to delete?')){
      const book = this.books[i];
      this.bookService.deleteBook(book.id).subscribe(() => {
        this.books = this.books.filter(t => t.id !== book.id);
      });
    }
  }

  onSubmit(): void{
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value)
        .subscribe(next => {
          this.books.unshift(next);
          this.bookForm.reset({
            title: '',
            author: '',
            description: '',
          });
        }, error => console.log(error));
    }
  }
}
