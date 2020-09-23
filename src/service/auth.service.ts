import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private http: HttpClient,private router:Router) { }

  auth(user: User) {
    return this.http.post("/user/auth", user, { responseType: 'text' })
  }

  findUserByHash(token) {
    return this.http.post("/user/findUserByHash", token, { responseType: 'json' })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (localStorage.getItem('token')) { // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
