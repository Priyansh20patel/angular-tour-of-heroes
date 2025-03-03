import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {

  heroes : Hero[]= [];          // empty array
  selectedHero!: Hero;            // hero property

  onSelect(hero: Hero): void {        //click on hero
    this.selectedHero = hero;
  }

  ngOnInit():void{
this.getHeroes();
    // this.selectedHero =  hero;
      // this.messageService.add(`HeroesComponent:Selected Hero id = $(hero.id)`);
  }
constructor(private heroService:HeroService){}

getHeroes(): void{
  // this.heroes = this.heroService.getHeroes();
}

}

