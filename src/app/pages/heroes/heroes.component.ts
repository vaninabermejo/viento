import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hero }  from '../../services/heroes/hero';
import { HeroService }  from '../../services/heroes/hero.service';
import { Subscription }       from 'rxjs/Subscription';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero : Hero;
  private selectedId: number;
  private sub: Subscription;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeroes(): void {
      this.service.getHeroes().then(heroes => this.heroes = heroes);
    }
  gotoDetail(): void {
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
