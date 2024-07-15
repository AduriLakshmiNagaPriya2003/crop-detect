import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacterialComponent } from './bacterial.component';

describe('BacterialComponent', () => {
  let component: BacterialComponent;
  let fixture: ComponentFixture<BacterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
