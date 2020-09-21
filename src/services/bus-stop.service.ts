import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrivalTimes } from './model/ArrivalTimes';

@Injectable({
  providedIn: 'root'
})
export class BusStopService {

  private readonly URL = 'http://localhost:5001/busStop/api/stops/';
  constructor(private httpClient: HttpClient) { }

  getNextArrivalTimes(stopId : number): Observable<any> {
    console.log('Request is sent!');
    return this.httpClient.get<Array<ArrivalTimes>>(`${this.URL}${encodeURIComponent(String(stopId))}`);
  }
}
