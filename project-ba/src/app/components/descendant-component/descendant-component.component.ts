import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-descendant-component',
  templateUrl: './descendant-component.component.html',
  styleUrls: ['./descendant-component.component.scss']
})
export class DescendantComponentComponent {
  @Input() surname = "";
  @Output() displayName = new EventEmitter();
  name = "Jane";
}
