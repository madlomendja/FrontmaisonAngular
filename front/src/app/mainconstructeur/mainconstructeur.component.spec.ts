import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainconstructeurComponent } from './mainconstructeur.component';

describe('MainconstructeurComponent', () => {
  let component: MainconstructeurComponent;
  let fixture: ComponentFixture<MainconstructeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainconstructeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainconstructeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
