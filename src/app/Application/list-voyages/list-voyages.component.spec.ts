import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoyagesComponent } from './list-voyages.component';

describe('ListVoyagesComponent', () => {
  let component: ListVoyagesComponent;
  let fixture: ComponentFixture<ListVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
