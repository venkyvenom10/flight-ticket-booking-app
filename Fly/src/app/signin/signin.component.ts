import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from  '@angular/forms';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // SignForm: FormGroup;
  // isSubmitted  =  false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessage1() {
    return this.password.hasError('required') ? 'Password is required' :
        this.password.hasError('password') ? 'Not a valid password' :
            '';
  }

  constructor(private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
  //   this.SignForm  =  this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  // });
  }
  // get formControls() { return this.SignForm.controls; }
  // Signin(){
  //   console.log(this.SignForm.value);
  //   this.isSubmitted = true;
  //   if(this.SignForm.invalid){
  //     return;
  //   }
    //this.authService.Signin(this.SignForm.value);
     //this.router.navigateByUrl('/Signin');
}
  



