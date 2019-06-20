import { Component, OnInit, ViewChild } from '@angular/core';
import { Flight } from '../shared/flight';
import { FlightService } from './flight.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subject, BehaviorSubject, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { Routes, RouterModule, Router, Params } from '@angular/router';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.css']
})
export class FlightdetailsComponent implements OnInit {
  flights:Flight[]=[];
  flight;
subscription:Subscription;

  displayedColumns: string[] = ['name', 'departureTime', 'duration','class','arrivalTime','price','actions'];
 
 
  
  constructor(private flightservice:FlightService,private route:ActivatedRoute) {}

  // getFlights(){
  //   // this.flights.forEach((x)=>this.location.push(x.location));
  //   // this.location = this.location.filter((x,index)=>this.location.indexOf(x)===index);
  //   // this.locationObservable.next(this.location);

  // }
  
  dataSource;
  returnDataSource;

  @ViewChild(MatSort) sort: MatSort;

  
  ngOnInit() {
    //  this.getflights();
    
   
  this.subscription=this.flightservice.flightObservable.subscribe((data:Flight[])=>{
    this.flights=data;

    this.dataSource = new MatTableDataSource(this.flights);
    this.dataSource.sort = this.sort;
  });

  this.subscription=this.flightservice.flightReturnObservable.subscribe((data:Flight[])=>{
    this.flights=data;

    this.returnDataSource = new MatTableDataSource(this.flights);
    this.returnDataSource.sort = this.sort;
  });
    this.flightservice.getflights();
    
   
  
  }

  
 
// getflights(){
//   this.flights=this.flightservice.getflights();
// }
// }
}

