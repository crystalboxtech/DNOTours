import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;



  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appService: LoginService,
) {}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        user_name: ['', Validators.required],
        password: ['', Validators.required],
 

    });


}
public user : any=[];
get f() { return this.loginForm.controls; }

onSubmit() {

  if (this.loginForm.invalid) {
    return;
}

  this.appService
  .loginData(this.loginForm.value)
  .subscribe((response) => {
       this.user=response;

       sessionStorage.setItem('user_name', this.user[0]['user_name']);
       sessionStorage.setItem('Usertype_code', this.user[0]['Usertype_code']);
       sessionStorage.setItem('User_code', this.user[0]['User_code']);
       if(this.user[0].code == '100')
       {
        this.router.navigate(['Home']);
       }else
       {
        this.reset()
        alert("Please enter velid User name Password")
       }


   });

  
}

reset() {
  this.loginForm.reset();
}

// this.router.navigate(['dashboard']);
}
