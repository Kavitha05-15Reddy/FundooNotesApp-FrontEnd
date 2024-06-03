import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit{
  forgotDataForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private userService : UserService){}
  ngOnInit(): void {
    this.forgotDataForm = this.formBuilder.group({
      Email: ['',(Validators.required)]
    })
  }

  OnForgot(){
    let reqData = {
      Email: this.forgotDataForm.value.Email
    }
    this.userService.forgot(reqData).subscribe((res: any)=>{
      console.log(res);
    })
  }
}
