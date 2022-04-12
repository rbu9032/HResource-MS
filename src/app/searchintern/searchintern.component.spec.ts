import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchinternComponent } from './searchintern.component';

describe('SearchinternComponent', () => {
  let component: SearchinternComponent;
  let fixture: ComponentFixture<SearchinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
