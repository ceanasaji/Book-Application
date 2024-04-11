import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from './../book.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {
  bookCreateForm!: FormGroup;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookCreateForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      bname: new FormControl('', [Validators.required]),
      writer: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
  }

  createNewBook() {
    this.bookService.createbook(this.bookCreateForm.value);
    alert("Record Created Successfully");
  }
}
