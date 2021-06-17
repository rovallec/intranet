import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHomepageComponent } from './global-homepage.component';

describe('GlobalHomepageComponent', () => {
  let component: GlobalHomepageComponent;
  let fixture: ComponentFixture<GlobalHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
