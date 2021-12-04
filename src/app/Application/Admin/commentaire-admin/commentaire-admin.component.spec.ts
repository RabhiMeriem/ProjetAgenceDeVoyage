import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireAdminComponent } from './commentaire-admin.component';

describe('CommentaireAdminComponent', () => {
  let component: CommentaireAdminComponent;
  let fixture: ComponentFixture<CommentaireAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
