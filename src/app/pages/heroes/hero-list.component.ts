import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Hero, HeroService }  from '../../services/heroes/hero.service';
import { Subscription }       from 'rxjs/Subscription';


@Component({
  template: `
    <h2>HEROES</h2>
    <md-content >

      <ul class="items">
        <li *ngFor="let hero of heroes"
        [class.selected]="isSelected(hero)"
        (click)="onSelect(hero)" [class.featured]="hero.featured">
        <div class="panel-body">
          <div class="photo">
            <img [src]="hero.image">
          </div>
          <table class="product=info">
          <tr>
            <td>
                <span class="badge">{{hero.id}}</span><h3> {{hero.name | uppercase}}</h3>
                <p *ngif="hero.stock>0">{{hero.stock}}in Stock</p>
                <p *ngif="hero.stock===0">out of Stock</p>
            </td>
            <td class="price">{{hero.price | currency:'EUR':true}}</td>
          </tr>
        </table>
      </div>
      </li>
    </ul>

</md-content>
  `,
styles:["./hero-list.component.css"])
export class HeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[];

  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.selectedId = +params['id'];
        this.service.getHeroes()
          .then(heroes => this.heroes = heroes);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
