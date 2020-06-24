import { Component, OnInit } from '@angular/core';
import { SearchPhotosService } from '../search-photos.service';

@Component({
  selector: 'app-search-and-display-photos',
  template: `<div style="text-align:center">
                <!--Welcome {{name}}!
                <h2>{{greetUser()}}</h2>-->

                <input #searchInput type="text">
                <button (click)="onClick(searchInput)">Search</button>
                <br>
                {{status}}
                <h2>Display photos</h2>
                {{errorMsg}}
                <div *ngFor="let item of photos| keyvalue">
                     
                    <div *ngIf="item.key=='items'">
                        <div *ngFor="let ln of item.value">
                            <a href="https://www.flickr.com/">
                              <img  src="{{ln.media.m}}" width="150" height="70">
                  
                            </a>
                        </div>
                    </div>
                    
                 </div>
              </div>`,
  styles: []
})
export class SearchAndDisplayPhotosComponent implements OnInit {

  public status = "";
  public photos: any [];
  public _url: string;
  public errorMsg;
  public apiKey: string;
  constructor(private _photoService: SearchPhotosService) {}
  

  ngOnInit(): void {}

  onClick(urlString){

    this.apiKey = "62de283180c43b709d3362e6625c0cd4";

    this._url = `https://api.flickr.com/services/feeds/photos_public.gne?
                api_key=${this.apiKey}&tags=${urlString.value}
                &tagmode=any&per_page=20&format=json&nojsoncallback=1`;

    console.log(this._url);

    //gets return from the service and sets the data for html rendering
    this._photoService.getPhotoDetails(this._url)
      .subscribe(data => this.photos=data,
                 error => this.errorMsg = error);

    this.status ="Searching images...";
  }

  resetStatus(){
    //this.status =" ";
  }
}
