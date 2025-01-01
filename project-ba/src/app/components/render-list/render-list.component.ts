import { Component } from '@angular/core';
import { Smartphone } from '../types/Smartphone';
@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.scss']
})
export class RenderListComponent {
  celulares: Smartphone[] = [
    { id: 1, name: "Smartphone XL", description: "A large screen with 4 cameras.", soldout: false },
    { id: 2, name: "Smartphone SE", description: "Special Edition with 5 cameras.", soldout: false },
    { id: 3, name: "Smartphone Mini", description: "A large phone.", soldout: false },
  ]

}
