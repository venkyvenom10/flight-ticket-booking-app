import { Injectable } from '@angular/core';
import { Flight } from '../shared/flight';
import { FLIGHT } from '../shared/flightdetails';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  temp:Flight[];
// location:string[]=[];
flightObservable: Subject<Flight[]>= new Subject<Flight[]>();  
 
  constructor() {
    this.temp=FLIGHT;
   }
  getflights(){
    this.flightObservable.next(this.temp);

  }
  filterFlights(data){
    FLIGHT.forEach(flight=>console.log(flight.onward+"--"+data.onward));
    this.temp=FLIGHT.filter(flight=>flight.from===data.leaving_from && flight.destination===data.going_to && flight.onward===data.onward)
    this.flightObservable.next(this.temp);
  }
}
