import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAprovalComponent } from './confirm-aproval.component';

describe('ConfirmAprovalComponent', () => {
  let component: ConfirmAprovalComponent;
  let fixture: ComponentFixture<ConfirmAprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmAprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
