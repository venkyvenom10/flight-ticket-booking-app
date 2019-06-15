import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string;
  constructor(private _router:Router) { }
  logOut(){
    sessionStorage.clear();
    // this._router.navigate(['signin']);
  }

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
  }

}
