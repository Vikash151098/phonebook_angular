import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  // step :1 create a html form equivalent in ts
  contactForm: FormGroup;

  //step:5 validations

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      // step :2 create form fields in ts
      name: new FormControl('', Validators.required), //work on step 5 for validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    // step:3 connect html form with ts form  using --databinding

    // refer html for step 3
  }
  submitContactHandler() {
    console.log(this.contactForm.value)
  }
}
