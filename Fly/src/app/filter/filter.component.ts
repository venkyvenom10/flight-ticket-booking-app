import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flightdetails/flight.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Options, LabelType} from 'ng5-slider';
import { FLIGHTNAMES, DEPARTURETIME } from '../shared/flightdetails';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterForm:FormGroup;
  flightsName;
  departureTime;
  minValue = 9000;
    maxValue = 90000;
  user: any;
  

    
  // maxValue=new FormControl('100000');
  // options:Options={
  //   floor:0,
  //   ceil:100,
  //   translate:(value:number,label:LabelType):string=>{
  //     switch(label){
  //       case LabelType.Low: return "Min Rs."+value;
  //       case LabelType.High: return "Max Rs."+value;
  //       default: return "Rs."+value;
  //     }
  //   }
  // }
  constructor(private flightservice:FlightService,private formBuilder:FormBuilder) {
    
  }
  buildFlights(){
    const arr=FLIGHTNAMES.flight.map(FLIGHT=>{
      return this.formBuilder.control(FLIGHT.selected);
    });
    return this.formBuilder.array(arr);
  }
  buildTime(){
    const arr=DEPARTURETIME.time.map(time=>{
      return this.formBuilder.control(time.selected);
    });
    return this.formBuilder.array(arr);

  }
  ngOnInit() {
    this.flightsName = FLIGHTNAMES; 
    this.departureTime = DEPARTURETIME

    this.filterForm = this.formBuilder.group({
      value: [''],
      flights:this.buildFlights(),
      times:this.buildTime()
     });

    this.filterForm.valueChanges.subscribe(data => {
      this.flightservice.getFilter(data);
      console.log(data);
    });
    
    }

    get times() {
      return this.filterForm.get('times');
    };
    get flights() {
      return this.filterForm.get('flights');
    };
   
  
  formatLabel(value:number|null){
    console.log(value)
      return Math.floor(value/1000)+'k'
  }
  
}

