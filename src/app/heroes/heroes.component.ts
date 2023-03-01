import { Component } from '@angular/core';
import { Hero } from 'src/heros';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  }
  heroes: Array<Hero> = HEROES;
  
}
