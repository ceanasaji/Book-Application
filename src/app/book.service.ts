import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  router!: any;

  constructor(private httpClient: HttpClient) {}

  SERVER_URL: string = "http://localhost:8080/api/";

  public getbooks() {
    return this.httpClient.get(this.SERVER_URL + 'books');
  }

  res: any;

  public createbook(book: { id: number, bname: string, writer: string, price: number }) {
    return this.httpClient.post(`${this.SERVER_URL}books`, book)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/book');
      });
  }

  public getbook(bookid: any)
  {
    return this.httpClient.get(`${this.SERVER_URL+'books'}/${bookid}`);
  }

  public updateBook(book: { id: number, bname: string, writer: string, price: number }) {
    return this.httpClient.put(`${this.SERVER_URL + 'books'}/${book.id}`, book)
      .subscribe((res: any) => {
        this.router.navigateByUrl('/book');
      });
  }

  public DeleteBook(id: any) {
    return this.httpClient.delete(`${this.SERVER_URL+'books'}/${id}`);
  }
}
