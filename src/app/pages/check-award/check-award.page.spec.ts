import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckAwardPage } from './check-award.page';

describe('CheckAwardPage', () => {
  let component: CheckAwardPage;
  let fixture: ComponentFixture<CheckAwardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAwardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
