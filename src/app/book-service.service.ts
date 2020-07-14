import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Book} from '../../book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient) { }
  getPost(count = 10): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.API_URL).pipe(
      map(response => response.filter((post, i) => i < count))
    );
  }
  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_URL}/${id}`);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }
}
