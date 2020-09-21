import { Component, OnInit } from '@angular/core';
import { BusStopService } from '../../services/bus-stop.service'
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ArrivalTimes } from 'src/services/model/ArrivalTimes';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css']
})
export class BusStopComponent implements OnInit {

  constructor(
    private readonly service: BusStopService
  ) { }

  stop1ArrivalTimes: ArrivalTimes[] = [];
  stop2ArrivalTimes: ArrivalTimes[] = [];
  live: boolean = true;

  ngOnInit(): void {
    this.getNextArrivalTimes();
    interval(60*1000)
    .pipe(takeWhile(() => this.live))
    .subscribe(() => {
      this.getNextArrivalTimes();
     });
  }

  getNextArrivalTimes()
  {
    this.service.getNextArrivalTimes(1).subscribe(result =>{
      this.stop1ArrivalTimes = [];
      this.stop1ArrivalTimes = result;
     }, 
     (error) => { 
       console.log(error.message);       
     });    

   this.service.getNextArrivalTimes(2).subscribe(result =>{
    this.stop2ArrivalTimes = [];
    this.stop2ArrivalTimes = result;
   }, 
   (error) => { 
      console.log(error.message);       
   });       
  }
}
