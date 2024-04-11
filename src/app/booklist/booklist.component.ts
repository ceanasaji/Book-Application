import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  books: any[] = [];
  
    constructor(private bookservice:BookService)
    {}  
    ngOnInit()
    {
      this.bookservice.getbooks().subscribe((data: any) => { this.books = data })
      
  }
  bdelstat: boolean = false;
  deleteBook(id:number)
 {
  this.bookservice.DeleteBook(id).subscribe((res:any)=>{
    this.books = this.books.filter( item => item.id !=id);
    this.bdelstat=true;  
  })
 }
}

