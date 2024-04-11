import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookdataService } from './bookdata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MynavbarComponent } from './mynavbar/mynavbar.component';
import { BannerComponent } from './banner/banner.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BooklistComponent } from './booklist/booklist.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MynavbarComponent,
    BannerComponent,
    BooklistComponent,
    BookcreateComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BookdataService),
    FormsModule,ReactiveFormsModule, 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
