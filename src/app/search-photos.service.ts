import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Iphoto } from './photo';
import { Observable, observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchPhotosService {

  //public _url: string = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  //calling the service and it returns the 
  //observable array (with casting in IPhoto interface)
  getPhotoDetails(url): Observable<Iphoto[]>{
    return this.http.get<Iphoto[]>(url)
                    .pipe(catchError(this.errorHandler));
    }

    errorHandler(error : HttpErrorResponse){
        return throwError(error.message || "Server Error");
    }
}
