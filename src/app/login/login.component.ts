import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/User';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })


  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

  auth() {
    this.authService.auth
      (new User(this.loginForm.get("username").value, this.loginForm.get("password").value)).subscribe(resp => {
        if (resp) {
          localStorage.setItem("token",resp)
          this.router.navigate(['/admin'])

        }
        
      })
  }

}
