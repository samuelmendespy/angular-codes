import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  login() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['private-page']);
    }

    alert("Failed. Login or password incorrect.");
    this.password = '';
    this.email = '';
  }

}
