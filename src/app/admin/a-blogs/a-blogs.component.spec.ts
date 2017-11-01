import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABlogsComponent } from './a-blogs.component';

describe('ABlogsComponent', () => {
  let component: ABlogsComponent;
  let fixture: ComponentFixture<ABlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
