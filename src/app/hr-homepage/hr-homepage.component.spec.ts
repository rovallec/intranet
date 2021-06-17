import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHomepageComponent } from './hr-homepage.component';

describe('HrHomepageComponent', () => {
  let component: HrHomepageComponent;
  let fixture: ComponentFixture<HrHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
