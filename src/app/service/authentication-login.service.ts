import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationLoginService {

  constructor() { }
  authenticate(username: string, password: string) {
    if (username === 'rahul@gmail.com' && password === '12345') {
      sessionStorage.setItem("authenticateUser", username);
      return true;
    } else {
      return false;
    }

  }

  isLoggedIn() {
    let user = sessionStorage.getItem("authenticateUser")
    if (user === null) {
      return false;
    } else {
      return true;
    }

  }
  userLogout(){
    sessionStorage.removeItem("authenticateUser")
  }
}
