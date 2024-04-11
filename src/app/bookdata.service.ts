import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookdataService implements InMemoryDbService {
  createDb() {
    let books: any[] = [
      { id: 101, bname: 'Harry Potter', writer: 'J.K Rowling', price: 500 },
      { id: 102, bname: 'Lord of the Rings', writer: 'J.R.R Tolkien', price: 450 },
      { id: 103, bname: 'The Alchemist', writer: 'Paulo Coelho', price: 300 },
      { id: 104, bname: 'The Hobbit', writer: 'J.R.R Tolkien', price: 400 },
      { id: 105, bname: 'The Catcher in the Rye', writer: 'J.D. Salinger', price: 350 }
    ];
    return { books };

  }
  construtor (){}
}
