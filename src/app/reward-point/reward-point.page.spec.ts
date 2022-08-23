import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardPointPage } from './reward-point.page';

describe('RewardPointPage', () => {
  let component: RewardPointPage;
  let fixture: ComponentFixture<RewardPointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardPointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardPointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
