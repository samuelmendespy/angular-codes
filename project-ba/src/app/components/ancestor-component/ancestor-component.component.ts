import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ancestor-component',
  templateUrl: './ancestor-component.component.html',
  styleUrls: ['./ancestor-component.component.scss']
})
export class AncestorComponentComponent {

  surname = "Doe";

  showFullName(fullName: string) {
    alert("The full name is " + fullName);
  }

}