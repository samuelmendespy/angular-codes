import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncestorComponentComponent } from './ancestor-component.component';

describe('AncestorComponentComponent', () => {
  let component: AncestorComponentComponent;
  let fixture: ComponentFixture<AncestorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncestorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AncestorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
