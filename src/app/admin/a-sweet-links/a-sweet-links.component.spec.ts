import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASweetLinksComponent } from './a-sweet-links.component';

describe('ASweetLinksComponent', () => {
  let component: ASweetLinksComponent;
  let fixture: ComponentFixture<ASweetLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASweetLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASweetLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
