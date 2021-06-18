import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHomepageComponent } from './location-homepage.component';

describe('LocationHomepageComponent', () => {
  let component: LocationHomepageComponent;
  let fixture: ComponentFixture<LocationHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
