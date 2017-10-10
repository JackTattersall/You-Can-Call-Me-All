import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetLinksComponent } from './sweet-links.component';

describe('SweetLinksComponent', () => {
  let component: SweetLinksComponent;
  let fixture: ComponentFixture<SweetLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
