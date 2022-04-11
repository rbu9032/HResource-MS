import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallinternsComponent } from './viewallinterns.component';

describe('ViewallinternsComponent', () => {
  let component: ViewallinternsComponent;
  let fixture: ComponentFixture<ViewallinternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallinternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallinternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
