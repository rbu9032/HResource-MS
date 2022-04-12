import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteinternComponent } from './deleteintern.component';

describe('DeleteinternComponent', () => {
  let component: DeleteinternComponent;
  let fixture: ComponentFixture<DeleteinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
