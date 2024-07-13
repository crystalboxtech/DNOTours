
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public userForm !: FormGroup;
  constructor(private appService: UserService,
    private formBuilder: FormBuilder) {
      this.createContactForm();
    }

    createContactForm(){
     
      this.userForm = this.formBuilder.group({
        user_code: ['-1'],  
        user_name: [''],  
        password: [''],
        mobile_number: [''],
        user_type: [4],
        email: ['']
      });
    }
  onSubmit() {

    this.appService
    .addUpdateData(this.userForm.value)
    .subscribe((response) => {
      this.reset();
     alert('User registered successfully');
  

     });
}
reset() {
  this.userForm.reset();
}
}
