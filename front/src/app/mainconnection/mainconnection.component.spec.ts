import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainconnectionComponent } from './mainconnection.component';

describe('MainconnectionComponent', () => {
  let component: MainconnectionComponent;
  let fixture: ComponentFixture<MainconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainconnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
