import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaspeckleComponent } from './bananaspeckle.component';

describe('BananaspeckleComponent', () => {
  let component: BananaspeckleComponent;
  let fixture: ComponentFixture<BananaspeckleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BananaspeckleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BananaspeckleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
