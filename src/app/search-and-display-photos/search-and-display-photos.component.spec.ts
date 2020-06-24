import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndDisplayPhotosComponent } from './search-and-display-photos.component';

describe('SearchAndDisplayPhotosComponent', () => {
  let component: SearchAndDisplayPhotosComponent;
  let fixture: ComponentFixture<SearchAndDisplayPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndDisplayPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndDisplayPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
