import { Component, OnChanges, Input, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-event-tracker',
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.scss']
})
export class EventTrackerComponent implements OnInit, OnChanges, OnDestroy {
  eventTime = new Date();
  timer: any = null;

  @Input() textValue = "";
  
  ngOnInit(): void {
    console.log('Event OnInit Initialized');
    this.timer = setInterval(() => this.eventTime = new Date(), 1000);  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`The onChanges event was triggered with the following changes:` + changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


}
