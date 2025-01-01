import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-with-parameters',
  templateUrl: './page-with-parameters.component.html',
  styleUrls: ['./page-with-parameters.component.scss']
})
export class PageWithParametersComponent implements OnInit {
  id: number | null = null;
  age: number | null = null;
  name: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.route.queryParamMap.subscribe(params => {
      this.age = Number(params.get('age'));
      this.name = params.get('name')  ;
    });

  }
  

}
