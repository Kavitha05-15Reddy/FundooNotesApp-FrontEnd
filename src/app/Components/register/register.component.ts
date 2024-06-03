import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerDataForm!:FormGroup;

  constructor(private formBuilder : FormBuilder, private userService : UserService){}
  
  ngOnInit(): void {
    this.registerDataForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  OnRegister(){
    let reqData = {
      firstName: this.registerDataForm.value.firstName,
      lastName: this.registerDataForm.value.lastName,
      email: this.registerDataForm.value.email,
      password: this.registerDataForm.value.password
    }
    this.userService.registration(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
