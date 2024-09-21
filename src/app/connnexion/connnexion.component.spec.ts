import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnnexionComponent } from './connnexion.component';

describe('ConnnexionComponent', () => {
  let component: ConnnexionComponent;
  let fixture: ComponentFixture<ConnnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnnexionComponent]
    });
    fixture = TestBed.createComponent(ConnnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
