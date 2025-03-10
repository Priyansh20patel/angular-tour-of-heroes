import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{
  createDb(){
 const heroes = [
{id : 12, name: 'Dr.Strange'},
{id : 13, name: 'Hulk'},
{id : 14, name: 'Captain America'},
{id : 15, name: 'Hawkie'},
{id : 16, name: 'Ironman'},
{id : 17, name: 'Dynamo'},
{id : 18, name: 'Thor'},
{id : 19, name: 'Spiderman'},
{id : 20, name: 'Black Widow'},
];
return {heroes};
}
genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

