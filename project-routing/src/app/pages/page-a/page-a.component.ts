import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent {

  constructor(private router: Router) {
  }
  
  gotoPageB() {
    this.router.navigate(["page-b"]);
  }


}
