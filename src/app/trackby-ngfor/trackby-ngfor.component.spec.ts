import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyNgforComponent } from './trackby-ngfor.component';

describe('TrackbyNgforComponent', () => {
  let component: TrackbyNgforComponent;
  let fixture: ComponentFixture<TrackbyNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackbyNgforComponent]
    });
    fixture = TestBed.createComponent(TrackbyNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
