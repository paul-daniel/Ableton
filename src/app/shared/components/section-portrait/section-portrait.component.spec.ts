import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortraitComponent } from './section-portrait.component';

describe('SectionPortraitComponent', () => {
  let component: SectionPortraitComponent;
  let fixture: ComponentFixture<SectionPortraitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPortraitComponent]
    });
    fixture = TestBed.createComponent(SectionPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
