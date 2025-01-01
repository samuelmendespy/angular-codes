import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAComponent } from './services-a.component';

describe('ServicesAComponent', () => {
  let component: ServicesAComponent;
  let fixture: ComponentFixture<ServicesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
