import { Component, OnInit, ViewChild } from '@angular/core';
import { Flight } from '../shared/flight';
import { FlightService } from './flight.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/table';



@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
  flights:Flight[]=[];
subscription:Subscription;

 //  dataSource:any;
  displayedColumns: string[] = ['name', 'departureTime', 'duration', 'arrivalTime','price'];
  // dataSource1 = new MatTableDataSource(this.flights);
 
  //  @ViewChild(MatSort) sort:MatSort;
  constructor(private flightservice:FlightService) { 
    // this.subscription=this.flightservice.flightObservable.subscribe(data:Flight[])=>this.flights=data);
    // this.temp = this.flights.slice();
  }

  // getFlights(){
  //   // this.flights.forEach((x)=>this.location.push(x.location));
  //   // this.location = this.location.filter((x,index)=>this.location.indexOf(x)===index);
  //   // this.locationObservable.next(this.location);

  // }
  
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  
  ngOnInit() {
    // this.getflights();
    
   
  this.subscription=this.flightservice.flightObservable.subscribe((data:Flight[])=>(this.flights=data));
    this.flightservice.getflights();
    this.dataSource = new MatTableDataSource(this.flights);
   this.dataSource.sort = this.sort;
  
  }
 
 
// getflights(){
//   this.flights=this.flightservice.getflights();
// }
// }
}

