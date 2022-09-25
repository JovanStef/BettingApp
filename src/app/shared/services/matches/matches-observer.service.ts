import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Match } from 'src/app/types/matches.types';

@Injectable({
  providedIn: 'root'
})
export class MatchesObserverService {
  private matchesSubject$ = new BehaviorSubject<Match[] | any>([])
  constructor() { }

  setMatches(matches:Match[]):void{
    return this.matchesSubject$.next(matches)
  }
  getMatches():Observable<number>{
    return this.matchesSubject$.asObservable()
  }
}
