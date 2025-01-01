import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescendantComponentComponent } from './descendant-component.component';

describe('DescendantComponentComponent', () => {
  let component: DescendantComponentComponent;
  let fixture: ComponentFixture<DescendantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescendantComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescendantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
