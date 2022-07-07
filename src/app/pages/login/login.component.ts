import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  auth = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  submitedForm: boolean = false;
  invalidAuth: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.submitedForm = true;
    if (!this.auth.valid) {
      this.invalidAuth = true;
    } else {
      this.invalidAuth = false;
      this.router.navigate(['/produtos']);
    }
  }

}
