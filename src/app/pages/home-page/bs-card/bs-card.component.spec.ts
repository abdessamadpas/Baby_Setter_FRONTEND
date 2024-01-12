import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BSCardComponent } from './bs-card.component';

describe('BSCardComponent', () => {
  let component: BSCardComponent;
  let fixture: ComponentFixture<BSCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BSCardComponent]
    });
    fixture = TestBed.createComponent(BSCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
