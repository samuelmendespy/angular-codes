import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithParametersComponent } from './page-with-parameters.component';

describe('PageWithParametersComponent', () => {
  let component: PageWithParametersComponent;
  let fixture: ComponentFixture<PageWithParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWithParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
