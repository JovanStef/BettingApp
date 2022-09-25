import { Component, Input, OnInit } from '@angular/core';
import { SportsObserverService } from 'src/app/shared/services/sports/sports-observer.service';
import { SportsUtilsService } from 'src/app/shared/services/sports/sports-utils.service';
import { League } from 'src/app/types/sports.types';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  @Input() leagues:League[] = []
  constructor(private utilsService:SportsUtilsService , private sportsObserverService:SportsObserverService) { }

  ngOnInit(): void {
    this.setLeagues()
  }
  async setLeagues(){
    this.leagues = await this.utilsService.sortLeaguesAplhabeticaly(this.leagues,'asc')
  }
  getMatches(league:League){
    this.sportsObserverService.setLeague(league)
  }

}
