import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAnimationComponent } from './line-animation.component';

describe('LineAnimationComponent', () => {
  let component: LineAnimationComponent;
  let fixture: ComponentFixture<LineAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineAnimationComponent]
    });
    fixture = TestBed.createComponent(LineAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
