import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindComponentComponent } from './bind-component.component';

describe('BindComponentComponent', () => {
  let component: BindComponentComponent;
  let fixture: ComponentFixture<BindComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
