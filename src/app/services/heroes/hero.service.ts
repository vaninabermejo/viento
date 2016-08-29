import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string, public stock:number, public price:number, public image:string, public featured : boolean) { }
}

let HEROES = [
  new Hero(11, 'Mr. Nice',5,560,"/assets/img/angular-logo.png",false),
  new Hero(12, 'Narco',4,460,"/assets/img/angular-logo.png",true),
  new Hero(13, 'Bombasto',3,360,"/assets/img/angular-logo.png",false),
  new Hero(14, 'Celeritas',2,260,"/assets/img/angular-logo.png",false),
  new Hero(15, 'Magneta',1,160,"/assets/img/angular-logo.png",true),
  new Hero(16, 'RubberMan',6,660,"/assets/img/angular-logo.png", true)
];

let heroesPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  getHeroes() { return heroesPromise; }

  getHero(id: number | string) {
    return heroesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
