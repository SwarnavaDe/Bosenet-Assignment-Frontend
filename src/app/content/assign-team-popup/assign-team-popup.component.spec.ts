import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeamPopupComponent } from './assign-team-popup.component';

describe('AssignTeamPopupComponent', () => {
  let component: AssignTeamPopupComponent;
  let fixture: ComponentFixture<AssignTeamPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignTeamPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTeamPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
