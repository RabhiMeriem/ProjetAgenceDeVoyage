import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedVoyageComponent } from './selected-voyage.component';

describe('SelectedVoyageComponent', () => {
  let component: SelectedVoyageComponent;
  let fixture: ComponentFixture<SelectedVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
