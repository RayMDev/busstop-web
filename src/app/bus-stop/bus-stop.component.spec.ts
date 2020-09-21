import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BusStopComponent } from './bus-stop.component';
import { BusStopService } from '../../services/bus-stop.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BusStopComponent', () => {
  let component: BusStopComponent;
  let fixture: ComponentFixture<BusStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [ BusStopService ],
      declarations: [ BusStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
