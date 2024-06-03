import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginDataForm!:FormGroup;
  constructor(private formBuilder : FormBuilder,private userService : UserService){}
  ngOnInit(): void {
    this.loginDataForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  // loginDataForm = new FormGroup({
  //   email: new FormControl(),
  //   pasword: new FormControl()
  // })
  
  OnLogin(){
    let reqData = {
      email: this.loginDataForm.value.email,
      password: this.loginDataForm.value.password
    }
    this.userService.login(reqData).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
    });
  }
}
