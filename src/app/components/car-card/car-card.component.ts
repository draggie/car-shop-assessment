import {Component, Input} from '@angular/core';
import {ICar} from "../../shared/interfaces";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car: ICar | null = null;
}
