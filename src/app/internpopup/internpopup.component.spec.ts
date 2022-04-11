import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternpopupComponent } from './internpopup.component';

describe('InternpopupComponent', () => {
  let component: InternpopupComponent;
  let fixture: ComponentFixture<InternpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
