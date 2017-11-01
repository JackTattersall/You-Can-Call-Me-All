import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AHobbiesComponent } from './a-hobbies.component';

describe('AHobbiesComponent', () => {
  let component: AHobbiesComponent;
  let fixture: ComponentFixture<AHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
