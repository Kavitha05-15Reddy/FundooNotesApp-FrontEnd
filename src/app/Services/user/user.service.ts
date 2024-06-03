import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(reqData: any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7153/api/User/Register', reqData, false, header);
  }

  login(reqData: any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7153/api/User/Login', reqData, false, header);
  }

  forgot(reqData: any){
    console.log(reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7153/api/User/ForgotPassword?Email='+reqData.Email, {}, false, header);
  }
    
}
