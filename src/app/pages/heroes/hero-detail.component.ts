import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params }       from '@angular/router';
import { Hero }  from '../../services/heroes/hero';
import { HeroService }  from '../../services/heroes/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit  {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private service: HeroService) {}

    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.service.getHero(id)
          .then(hero => this.hero = hero);
      });
    }

    goBack(): void {
      window.history.back();
    }
}
