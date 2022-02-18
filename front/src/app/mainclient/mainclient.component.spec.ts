import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainclientComponent } from './mainclient.component';

describe('MainclientComponent', () => {
  let component: MainclientComponent;
  let fixture: ComponentFixture<MainclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
