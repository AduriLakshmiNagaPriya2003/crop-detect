import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyleafComponent } from './greyleaf.component';

describe('GreyleafComponent', () => {
  let component: GreyleafComponent;
  let fixture: ComponentFixture<GreyleafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreyleafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreyleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
