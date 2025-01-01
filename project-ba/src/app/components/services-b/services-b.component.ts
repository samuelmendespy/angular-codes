import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-services-b',
  templateUrl: './services-b.component.html',
  styleUrls: ['./services-b.component.scss']
})
export class ServicesBComponent {
  description = ' ';

  constructor(public logger:LoggerService) { }

  addProduct() {
    // console.log(`The product description  ${this.description} was sucessfully added`);
    this.logger.login(`The product with description ${this.description} was sucessfully added`);
  }

}
