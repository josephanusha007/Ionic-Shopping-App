import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;
  constructor(private router: Router, public formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern("[a-z0-9.@]*"), Validators.required])],
    });

  }

  reset(form) {
    console.log(form.value);
    this.router.navigateByUrl('login');
  }

}
