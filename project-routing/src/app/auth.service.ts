import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  acessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  constructor() { }

  isAuthenticated():boolean { 
    return !!sessionStorage.getItem('acess-token'); 
  }

  login(email: string, password: string): boolean {
    if(email === "test@mail.com.br" && password === "123456") {
      sessionStorage.setItem("acess-token", this.acessToken);
      return true;
    }
    return false;
}

  logout() {
    sessionStorage.removeItem("acess-token");
    sessionStorage.clear();
  }
}
