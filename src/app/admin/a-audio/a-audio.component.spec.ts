import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAudioComponent } from './a-audio.component';

describe('AAudioComponent', () => {
  let component: AAudioComponent;
  let fixture: ComponentFixture<AAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
