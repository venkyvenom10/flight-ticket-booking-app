import { Injectable } from '@angular/core';
import { Flight } from '../shared/flight';
import { FLIGHT, FLIGHTNAMES, DEPARTURETIME } from '../shared/flightdetails';
import { Subject, Subscription, never } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  temp:Flight[];
  tempReturn:Flight[];
// location:string[]=[];
searchFormdata={};
flightObservable: Subject<Flight[]>= new Subject<Flight[]>(); 
flightReturnObservable: Subject<Flight[]>= new Subject<Flight[]>();   
  datepipe:DatePipe = new DatePipe('en-US');
  constructor() {
    this.temp = FLIGHT;
   }
  getflights(){
    this.flightObservable.next(this.temp);
    this.flightReturnObservable.next(this.tempReturn);
  }
  filterFlights(data){
   
    this.searchFormdata=data;
    FLIGHT.forEach(flight=>console.log(flight.onward+"--"+data.picker));
    
    this.temp=FLIGHT.filter(flight=>flight.from===data.from && flight.destination===data.to && (flight.onward===this.datepipe.transform(data.picker, 'yyyyMMdd')) && flight.class===data.class)
    this.flightObservable.next(this.temp);

    if(data.picker1){
      this.tempReturn=FLIGHT.filter(flight=>flight.from===data.to && flight.destination===data.from && (flight.onward===this.datepipe.transform(data.picker1, 'yyyyMMdd')) && flight.class===data.class)
      this.flightReturnObservable.next(this.tempReturn);
      console.log(this.tempReturn);

    }else{
      this.tempReturn=[];
      this.flightReturnObservable.next(this.tempReturn);
    }
    
  }

  getselectedvalue(){
    console.log(this.searchFormdata);
return this.searchFormdata;

  }
  getFilter(rgvalue){
    let filterDataOn = []
    let filterDataRe = []
    let flightName = []
    let depatTime = []
    let value = rgvalue.value
    if(rgvalue.flights)
    rgvalue.flights.forEach((data,i)=>(data)?flightName.push(FLIGHTNAMES.flight[i].name):"");

  
    if(rgvalue.times)
    rgvalue.times.forEach((data,i)=>(data)?depatTime.push(DEPARTURETIME.time[i].timing):"");

    //rgvalue.times.forEach((data,i) => console.log(data));
    this.temp.slice().forEach(flight=>console.log(this.checkTiming(flight.departureTime,depatTime)))
    // onward
    filterDataOn = this.temp.slice().filter(flight => flight.price >=value &&  flightName.indexOf(flight.name)!=-1 && this.checkTiming(flight.departureTime,depatTime));

    console.log(filterDataOn);
    console.log(rgvalue);

    this.flightObservable.next(filterDataOn);
    //return
    if(this.tempReturn!=null &&  this.tempReturn.length>0){
    
      filterDataRe = this.tempReturn.filter(rangevalue => rangevalue.price >=rgvalue);
    console.log(filterDataRe);
    this.flightReturnObservable.next(filterDataRe);
    }
    }
  checkTiming(flightDept,deptArray:any[]):Boolean {
    return deptArray.filter((data:string)=>{
      let arr = data.split('-');
     // console.log((flightDept>=arr[0] && flightDept<arr[1])+flightDept+"-"+arr[0] +" / "+ flightDept+"-"+arr[1] )
      return flightDept>=arr[0] && flightDept<arr[1];
    }).length>0
  }

    

}