import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedLinkComponent } from './grouped-link.component';

describe('GroupedLinkComponent', () => {
  let component: GroupedLinkComponent;
  let fixture: ComponentFixture<GroupedLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedLinkComponent]
    });
    fixture = TestBed.createComponent(GroupedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
