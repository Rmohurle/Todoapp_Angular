import { Component, OnInit } from '@angular/core';
import { AuthenticationLoginService } from '../service/authentication-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public auth: AuthenticationLoginService) { }

  ngOnInit(): void {
    this.auth.userLogout();
  }

}
