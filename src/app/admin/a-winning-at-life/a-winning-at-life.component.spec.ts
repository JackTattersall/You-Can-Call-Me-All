import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWinningAtLifeComponent } from './a-winning-at-life.component';

describe('AWinningAtLifeComponent', () => {
  let component: AWinningAtLifeComponent;
  let fixture: ComponentFixture<AWinningAtLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWinningAtLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWinningAtLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
