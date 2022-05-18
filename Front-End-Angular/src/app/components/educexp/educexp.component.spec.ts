import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducexpComponent } from './educexp.component';

describe('EducexpComponent', () => {
  let component: EducexpComponent;
  let fixture: ComponentFixture<EducexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
