import { Component } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.scss']
})
export class BindComponent {
  name = "João";
  birthDate = "1995-01-01";
  imageCode= "a"
  imageFile = `/assets/image-${this.imageCode}.png`;


  showBirthDate() {
    alert(` A data de nascimento é ${this.birthDate} `);
  }

  changeImage() {
    this.imageCode = this.imageCode === "a" ? "b" : "a";
    this.imageFile = `/assets/image-${this.imageCode}.png`;
  }
}