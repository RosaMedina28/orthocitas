import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxilofacialComponent } from './maxilofacial.component';

describe('MaxilofacialComponent', () => {
  let component: MaxilofacialComponent;
  let fixture: ComponentFixture<MaxilofacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxilofacialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxilofacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
