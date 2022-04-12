import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateinternComponent } from './updateintern.component';

describe('UpdateinternComponent', () => {
  let component: UpdateinternComponent;
  let fixture: ComponentFixture<UpdateinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
