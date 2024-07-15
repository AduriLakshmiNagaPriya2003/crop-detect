import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownleafComponent } from './brownleaf.component';

describe('BrownleafComponent', () => {
  let component: BrownleafComponent;
  let fixture: ComponentFixture<BrownleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownleafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrownleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
