import { Component, OnInit } from '@angular/core';
import {Book} from '../../../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  books: Book [] = [];
  bookForm: FormGroup;
  message: string;
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
          this.message = 'Add new book successfully!';
          this.bookForm.reset({
            title: '',
            author: '',
            description: '',
          });
        }, error => console.log(error));
    }
  }
}
