import { Component } from '@angular/core';
import { faBowlFood, faBurger, faCircleChevronRight, faFishFins, faGlassCheers, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faPizzaSlice=faPizzaSlice
  faBowlFood=faBowlFood
  faBurger=faBurger
  faGlassCheers=faGlassCheers
  faFishFins=faFishFins
  title = 'test';
}
