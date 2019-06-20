import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.component.html',
  styleUrls: ['./reviewdetails.component.css']
})

export class ReviewdetailsComponent implements OnInit {
  flight;

  constructor(private flightservice:FlightService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params:Params)=>{
       this.flight=this.flightservice.getFlightDetailsById(+params.get('id'));
    });
  }
}
