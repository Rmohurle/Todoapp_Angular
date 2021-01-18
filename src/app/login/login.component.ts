import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationLoginService } from '../service/authentication-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=''
  password=''
  invalidLogin=false
  constructor(private router:Router,
    public auth:AuthenticationLoginService) { }


  ngOnInit(): void {
  }
  handleLogin(){
    if(this.auth.authenticate(this.username,this.password)){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin=true
    }
  }
}
