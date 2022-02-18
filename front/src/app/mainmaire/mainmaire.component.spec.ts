import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainmaireComponent } from './mainmaire.component';

describe('MainmaireComponent', () => {
  let component: MainmaireComponent;
  let fixture: ComponentFixture<MainmaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainmaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainmaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
