import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SearchAndDisplayPhotosComponent } from '../app/search-and-display-photos/search-and-display-photos.component'
import { SearchPhotosService } from './search-photos.service';
import { Observable } from 'rxjs';

describe('SearchPhotosService', () => {
  let service: SearchPhotosService;
  let component: SearchAndDisplayPhotosComponent;
  let fixture: ComponentFixture<SearchAndDisplayPhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchAndDisplayPhotosComponent],
      providers: [SearchPhotosService]
    });
    service = TestBed.inject(SearchPhotosService);
    fixture = TestBed.createComponent(SearchAndDisplayPhotosComponent);
    component = fixture.componentInstance;
  });

  it('should set the  property after return from the server', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getPhotoDetails').and.callFake(() => {
        return Observable.arguments([todos]);//simulating the return
    });
    component.onClick('http://jsonplaceholder.typicode.com/posts');//simulating the arguement pass

    expect(service).toBeTruthy();
  });
});
