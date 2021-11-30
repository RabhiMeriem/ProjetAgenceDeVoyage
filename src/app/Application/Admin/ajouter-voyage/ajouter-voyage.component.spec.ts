import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterVoyageComponent } from './ajouter-voyage.component';

describe('AjouterVoyageComponent', () => {
  let component: AjouterVoyageComponent;
  let fixture: ComponentFixture<AjouterVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
