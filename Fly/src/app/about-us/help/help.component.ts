import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  msgFormGroup: FormGroup;
  submitted = false;
  success = false;
  constructor(private msgFormBuilder: FormBuilder) { }

  ngOnInit() {
    this.msgFormGroup = this.msgFormBuilder.group({
      name: ['', Validators.required],
      phno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      msg: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted =  true;
    if (this.msgFormGroup.invalid) {
      return;
    }

    this.success = true;
  }
}


