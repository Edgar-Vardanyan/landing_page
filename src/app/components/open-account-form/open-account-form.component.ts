import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-open-account-form',
  templateUrl: './open-account-form.component.html',
  styleUrls: ['./open-account-form.component.scss'],
})
export class OpenAccountFormComponent implements OnInit {
  openAccountForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    secondName: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() {}

  ngOnInit(): void {}
}
