import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent {
  updateMessage: string = '';
  updateHistory: {message: string, date: string}[] = [];

  constructor() {
    this.updateMessage = '';
  }


  saveUpdateMessage(): void {
    if(this.updateMessage.trim().length === 0) {
      alert('Please enter a valid message!');
      return;
    }

    const currentDate = new Date().toISOString().split('T')[0];
    const newUpdate = {
      message: this.updateMessage,
      date: currentDate
    };

    this.updateHistory.push(newUpdate);
    this.updateMessage = '';
  }

  onUpdateHistoryChange(updatedHistory: any[]): void {
    this.updateHistory = updatedHistory;
  }


}
