import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {


  projectStartDate: Date;

  projectTitle: string = 'Log On Click';
  projectDescription ='A simple log by click. ';

  constructor(private titleService: Title) {
    this.projectStartDate = new Date('2024-12-30');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.projectTitle);
  }

}
