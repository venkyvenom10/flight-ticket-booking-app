
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Flight } from 'src/app/shared/flight';
import { FlightService } from 'src/app/flightdetails/flight.service';
import { Routes, RouterModule, Router } from '@angular/router';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[DatePipe]
})

export class searchComponent implements OnInit {
  flights:Flight[]=[];
  subscription:Subscription;
  stateForm: FormGroup = this.fb.group({
      from: [''],
      to: [''],
      picker: [''],
      picker1:[''],
      traveller:[''],
      class:['']
    });


  constructor(private fb: FormBuilder,private flightservice:FlightService,private _router:Router
              ) {}


  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Ahmedabad', 'Aurangabad', 'Agra']
  }, {
    letter: 'B',
    names: ['Bangalore', 'Bhopal']
  }, {
    letter: 'C',
    names: ['Chennai', 'Coimbatore']
  }, {
    letter: 'D',
    names: ['Delhi']
  }, {
    letter: 'E',
    names: ['Ernakulam']
  }, {
    letter: 'G',
    names: ['Goa', 'Guntur', 'Guwahati']
  }, {
    letter: 'H',
    names: ['Hosur', 'Hyderabad']
  }, {
    letter: 'I',
    names: ['Indore']
  }, {
    letter: 'K',
    names: ['Kolkata']
  }, {
    letter: 'L',
    names: ['Lucknow']
  }, {
    letter: 'M',
    names: ['Madurai', 'Maharashtra', 'Mangalore']
  }, {
    letter: 'N',
    names: ['Nagpur', 'Nellore', 'Nashik', 'Nagercoil']
  }, {
    letter: 'O',
    names: ['Orissa']
  }, {
    letter: 'P',
    names: ['Pune']
  }, {
    letter: 'R',
    names: ['Rajkot']
  }, {
    letter: 'S',
    names: ['Salem']
  }, {
    letter: 'T',
    names: ['Tirupati', 'Trichy', 'Tirunelveli']
  }, {
    letter: 'V',
    names: ['Vijayawada', 'Vishakapatnam']
  }];

  stateGroupOptions: Observable<StateGroup[]>;
  flight: object;
  today = new Date();

  ngOnInit() {
    // this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filterGroup(value))
    //   );

      this.stateForm.patchValue(this.flightservice.getselectedvalue());
     
 }
  // update() {
  //   this.from = document.getElementById('fromInput') as HTMLInputElement;
  //   this.to = document.getElementById('toInput') as HTMLInputElement;
  //   this.depart = document.getElementById('departInput') as HTMLInputElement;
  // }


  searchFlights() {
    // let route = {
    //   leaving_from: this.from.value,
    //   going_to: this.to.value,
    //   onward: this.datepipe.transform(this.depart.value, 'yyyyMMdd')
    // };
console.log(this.stateForm);
    this.flightservice.filterFlights(this.stateForm.value);
      this._router.navigate(["flightdetails"]);
    
  }

  // private _filterGroup(value: string): StateGroup[] {
  //   if (value) {
  //     return this.stateGroups
  //       .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
  //       .filter(group => group.names.length > 0);
  //   }

    // return this.stateGroups;
  }




    // localStorage.setItem('route', JSON.stringify(route));
    // this.data.getBuses(this.from.value, this.to.value, this.datepipe.transform(this.depart.value, 'yyyyMMdd')).subscribe(
    //   data => {this.buses = data
    //     // , console.log(this.buses);
    //   });
    // this.router.navigate(['search']);
    // this.search.searchbus(this.from.value, this.to.value, this.datepipe.transform(this.depart.value, 'yyyyMMdd'));