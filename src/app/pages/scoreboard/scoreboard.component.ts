import{Component} from '@angular/core';
import {Race} from '../../services/race/race';
import {RaceService} from '../../services/race/race.service';
import { ScoreboardItemComponent } from './scoreboardItem.component';

@Component({
  selector:"scoreboard",
  templateUrl:"./scoreboard.component.html",
  directives: [ScoreboardItemComponent],
  styles: [`
    ul {
      height: 200px;
      overflow: auto;
    }
  `]
})
export class ScoreboardComponent {
  private races :Race[];
  notifications: string[]=[];
  constructor (private raceService: RaceService){}
  ngOnInit(){
    this.raceService.getRaces()
    .subscribe(data=>{
      this.races=data}
    );
  }
}
