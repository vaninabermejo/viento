import { Component, Input, Output, EventEmitter } from '@angular/core'
import {Race} from '../../services/race/race';
import {RaceScoreService} from '../../services/race/raceScore.service';
import { RaceScore } from '../../services/race/raceScore';

@Component({
  selector: 'scoreboard-item',
  templateUrl:'./scoreboardItem.component.html',
  providers: [RaceScoreService],
  styles: [`
    .scoreboard-item {
      border: 1px solid red;
    }

    .scoreboard-item.finished {
      border: 1px solid green;
    }
  `]
})

export class ScoreboardItemComponent {
  score: RaceScore

  @Input() race: Race
  @Output() notification = new EventEmitter<string>()

  constructor(private raceScoreService: RaceScoreService){}

  ngOnInit(){
    this.raceScoreService.getScoreForRace(this.race.id)
      .subscribe(data => {
        this.checkForNotification(data)
        this.score = data
      })
  }

  checkForNotification(newScore){
    if(newScore.currentLap >= newScore.totalLaps) {
      this.notification.emit(`The ${this.race.name} race has finished and ${newScore.racers[0]} is the winner!`)
    }

    if(this.score && newScore.racers[0] != this.score.racers[0]) {
      this.notification.emit(`${newScore.racers[0]} has taken the lead in the ${this.race.name} race!`)
    }
  }
}
