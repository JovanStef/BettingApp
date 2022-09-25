import { Injectable } from '@angular/core';
import { Match } from 'src/app/types/matches.types';
import { MatchesObserverService } from './matches-observer.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesRequestService {
  
  constructor(private matchesObserverService : MatchesObserverService) { }

  async getMatchesByLeagueId(id:number):Promise<Match[]>{
    try {
      const {data} = await import(`../../../../assets/json/matches/league_${id}.json`);
      this.matchesObserverService.setMatches(data)
      return data
    } catch (error) {
      throw {message:'No data'}
    }

  }
  async getOddsLayout():Promise<any>{
    try {
      const {data} = await import(`../../../../assets/json/layout.json`);
      return data
    } catch (error) {
      throw {message:'No data'}
    }

  }
}
