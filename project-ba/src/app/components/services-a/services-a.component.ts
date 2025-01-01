import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-services-a',
  templateUrl: './services-a.component.html',
  styleUrls: ['./services-a.component.scss']
})
export class ServicesAComponent {
  name = ' ';

  constructor(private logger: LoggerService) { }

  addName() {
    // console.log(`The name  ${this.name} was sucessfully added`);
    this.logger.login(`The name ${this.name} was sucessfully added`);
  }
}
