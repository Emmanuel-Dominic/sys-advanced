import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDataComponent } from './some-data.component';

describe('SomeDataComponent', () => {
  let component: SomeDataComponent;
  let fixture: ComponentFixture<SomeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeDataComponent]
    });
    fixture = TestBed.createComponent(SomeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
