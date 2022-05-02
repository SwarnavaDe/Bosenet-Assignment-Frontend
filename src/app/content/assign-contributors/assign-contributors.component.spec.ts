import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignContributorsComponent } from './assign-contributors.component';

describe('AssignContributorsComponent', () => {
  let component: AssignContributorsComponent;
  let fixture: ComponentFixture<AssignContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
