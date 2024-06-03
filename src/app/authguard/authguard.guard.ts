import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthguardService } from "../Services/authguard/authguard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authguardService : AuthguardService , private router: Router) {} 

  canActivate(): boolean {
    if (!this.authguardService.getToken()) {
      this.router.navigateByUrl('/login'); 
    }
    return this.authguardService.getToken(); 
  }
}
