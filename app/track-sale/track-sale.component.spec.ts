import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSaleComponent } from './track-sale.component';

describe('TrackSaleComponent', () => {
  let component: TrackSaleComponent;
  let fixture: ComponentFixture<TrackSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
