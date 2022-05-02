import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContributorComponent } from './new-contributor.component';

describe('NewContributorComponent', () => {
  let component: NewContributorComponent;
  let fixture: ComponentFixture<NewContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContributorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
