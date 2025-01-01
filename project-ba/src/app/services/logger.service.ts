import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = []; 

  login(message: string){
    console.log(` LOG REF#${this.messages.length - 1} ${message}`);
    this.messages.push(message);
  }

  showLogs() {
    console.log(this.messages);
  }

}
