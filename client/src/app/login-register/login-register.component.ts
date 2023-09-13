import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  constructor(private commonService : CommonService) {}
  public pageValue = "register"
  public login = "login"
  public register = "register"

  title='ReactiveForms';
  reactiveForm : FormGroup;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
       userName:new FormControl(null),
       email : new FormControl(null),
       password : new FormControl(null),
       dob: new FormControl(null),
       gender: new FormControl(null),
    })
  }

  pageValueChange(val : any){
    this.pageValue = val;
    console.log(val)
  }
  registerLoginUser(){
    console.log(this.reactiveForm);
    this.commonService.signup(this.reactiveForm)
  }
}
