import { Component, OnInit } from '@angular/core';
import { AuthenticationLoginService } from '../service/authentication-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn:boolean | undefined;
  
  constructor(public auth:AuthenticationLoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.auth.isLoggedIn()
  }
  }


