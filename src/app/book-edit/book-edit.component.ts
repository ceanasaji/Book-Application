import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id!: number;
  book = '';
  bookEditForm!: FormGroup;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.bookEditForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      bname: new FormControl('', [Validators.required]),
      writer: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });

    this.bookService.getbook(this.id).subscribe(
      x => {
        this.bookEditForm.patchValue(x);
      }
    ); 
    
  }

  editBook() {
    this.bookService.updateBook(this.bookEditForm.value);
    alert('Data Updated');
  }
}
