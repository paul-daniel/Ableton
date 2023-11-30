import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveTextComponent } from './descriptive-text.component';

describe('DescriptiveTextComponent', () => {
  let component: DescriptiveTextComponent;
  let fixture: ComponentFixture<DescriptiveTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptiveTextComponent]
    });
    fixture = TestBed.createComponent(DescriptiveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
