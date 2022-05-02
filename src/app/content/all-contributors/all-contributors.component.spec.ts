import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContributorsComponent } from './all-contributors.component';

describe('AllContributorsComponent', () => {
  let component: AllContributorsComponent;
  let fixture: ComponentFixture<AllContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
