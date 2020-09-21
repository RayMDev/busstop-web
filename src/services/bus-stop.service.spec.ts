import { inject, TestBed } from '@angular/core/testing';

import { BusStopService } from './bus-stop.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BusStopService', () => {
  let service: BusStopService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ BusStopService ]
  });

  service = TestBed.get(BusStopService);
  httpMock = TestBed.get(HttpTestingController);
  });

  it('should fetch data',
  () => {

      const dummyTimes = [
        { route: 1, firstNextArrivalTime: 14, secondNextArrivalTime: 29 },
        { route: 2, firstNextArrivalTime: 1, secondNextArrivalTime: 16 },
        { route: 3, firstNextArrivalTime: 3, secondNextArrivalTime: 18 }
      ];
  
      service.getNextArrivalTimes(1).subscribe(data => {
        expect(data.length).toBe(3);
        expect(data).toEqual(dummyTimes);
      });
  
      const req = httpMock.expectOne('http://localhost:5001/busStop/api/stops/1');
      expect(req.request.method).toBe("GET");
      req.flush(dummyTimes);
    }
  );
});
