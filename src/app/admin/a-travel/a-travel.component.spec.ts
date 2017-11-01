import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATravelComponent } from './a-travel.component';

describe('ATravelComponent', () => {
  let component: ATravelComponent;
  let fixture: ComponentFixture<ATravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
