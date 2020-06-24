import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchAndDisplayPhotosComponent } from './search-and-display-photos/search-and-display-photos.component';
import { SearchPhotosService } from './search-photos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchAndDisplayPhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchPhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
