import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.page.html',
  styleUrls: ['./firstform.page.scss'],
})
export class FirstformPage implements OnInit {
  firstForm: FormGroup;

  constructor(private router: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstForm = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      lastname: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern("[a-z0-9.@]*"), Validators.required])],
      mobile: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      aadhar: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      gender: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      dob: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      address: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      city: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      country: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      pincode: ['', Validators.compose([Validators.required])],
    });
  }

  submitPrimaryDetails(form){
    console.log(form.value);     
    this.router.navigateByUrl('reviewfirstform', {state: {data: form.value}}); 
  }

}
