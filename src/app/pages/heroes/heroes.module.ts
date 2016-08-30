import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { HeroComponent }    from './hero.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from '../../services/heroes/hero.service';


import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRouting
  ],
  declarations: [
    HeroComponent
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule {}
