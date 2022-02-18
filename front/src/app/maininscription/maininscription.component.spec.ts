import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaininscriptionComponent } from './maininscription.component';

describe('MaininscriptionComponent', () => {
  let component: MaininscriptionComponent;
  let fixture: ComponentFixture<MaininscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaininscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaininscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
