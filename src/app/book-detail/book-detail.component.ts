import { Component, OnInit } from '@angular/core';
import {Book} from '../../../book';
import {BookServiceService} from '../book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor(private bookServiceService: BookServiceService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.bookServiceService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
}
