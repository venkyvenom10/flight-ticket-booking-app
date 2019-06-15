import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    regiForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.regiForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phonenumber: ['', [Validators.required, Validators.pattern('([0-9]{10})')]],
            password: ['', [
                Validators.required, 
                Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
            ]],
            // dob:['']
            
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.regiForm.invalid) {
            return;
        }

        console.log(this.regiForm.value)
    }

}
