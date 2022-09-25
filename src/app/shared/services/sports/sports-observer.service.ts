import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { League } from 'src/app/types/sports.types';

@Injectable({
  providedIn: 'root'
})
export class SportsObserverService {
  private leaguesSubject$ = new BehaviorSubject<League | any>(null)
  constructor() { }

  setLeague(league:League):void{
    return this.leaguesSubject$.next(league)
  }
  getLeague():Observable<League>{
    return this.leaguesSubject$.asObservable()
  }
}
