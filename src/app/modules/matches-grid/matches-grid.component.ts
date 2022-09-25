import { Component, OnInit , OnDestroy} from '@angular/core';
import { MatchesRequestService } from '../../shared/services/matches/matches-request-service.service';
import { SportsObserverService } from 'src/app/shared/services/sports/sports-observer.service';
import { Match } from 'src/app/types/matches.types';
import { Subscription } from 'rxjs';
import { League } from 'src/app/types/sports.types';
import { OddsLayout, OddsLayoutItem } from 'src/app/types/oddsLayout.types';
import { MatchesUtilsService } from 'src/app/shared/services/matches/matches-utils.service';
@Component({
  selector: 'app-matches-grid',
  templateUrl: './matches-grid.component.html',
  styleUrls: ['./matches-grid.component.scss'],
})
export class MatchesGridComponent implements OnInit , OnDestroy {
  matches: Match[] = [];
  league:League | null = null;
  oddsLayout:OddsLayout[] |any = []
  oddsLayoutItems:OddsLayoutItem[] | any = []

  private leagueSubscription:Subscription = new Subscription
  constructor(private matchesRequestService: MatchesRequestService , private sportsObserverService:SportsObserverService , private marchesUtilsService:MatchesUtilsService) {}

  ngOnInit(): void {
    this.leagueSubscription = this.sportsObserverService.getLeague().subscribe((league)=>this.loadLeague(league))
  }

  async loadLeague(league:League) {
    this.matches = []
    this.league = league
    try {
      const matches = await this.matchesRequestService.getMatchesByLeagueId(league?.id);
      await this.loadOddsTableData(matches)
    } catch (error) {
      console.log(error);
    }
  }
  ngOnDestroy(){
    this.leagueSubscription.unsubscribe()
  }

  async loadOddsTableData(matches:Match[]){
    await this.loadOddsLayout()
    await this.pairMatchesOdds(matches)
  }
  async loadOddsLayout(){
    try {
      if(this.oddsLayout.length === 0){
        this.oddsLayout = await this.matchesRequestService.getOddsLayout();
        this.oddsLayout = await this.marchesUtilsService.sortOddsLayout(this.oddsLayout , 'asc')
        this.oddsLayoutItems = this.oddsLayout.map((oddLayoutItem:any) => oddLayoutItem.odds ).flat()
      }
    } catch (error) {
      console.log(error);
    }
  }
  async pairMatchesOdds(matches:Match[]){
    this.matches = await this.marchesUtilsService.pairMatchesOdds(this.oddsLayout , matches)
  }
}
