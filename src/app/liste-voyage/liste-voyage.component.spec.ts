import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVoyageComponent } from './liste-voyage.component';

describe('ListeVoyageComponent', () => {
  let component: ListeVoyageComponent;
  let fixture: ComponentFixture<ListeVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
