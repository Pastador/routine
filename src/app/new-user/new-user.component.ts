import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new User(
      formValue['id'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/users']);
  }
}