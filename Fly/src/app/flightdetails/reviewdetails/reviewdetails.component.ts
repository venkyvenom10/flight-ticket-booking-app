import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.component.html',
  styleUrls: ['./reviewdetails.component.css']
})
export class ReviewdetailsComponent implements OnInit {

  constructor(private flightservice:FlightService) { }

  ngOnInit() {
  }
}
