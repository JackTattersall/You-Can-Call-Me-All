import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningAtLifeComponent } from './winning-at-life.component';

describe('WinningAtLifeComponent', () => {
  let component: WinningAtLifeComponent;
  let fixture: ComponentFixture<WinningAtLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinningAtLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinningAtLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
