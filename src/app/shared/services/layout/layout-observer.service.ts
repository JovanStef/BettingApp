import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LayoutObserverService {
  show = false
  private leaguesSubject$ = new BehaviorSubject<boolean>(false)
  constructor() { }

  setShowMenu(show:boolean):void{
    this.show = show
    return this.leaguesSubject$.next(show)
  }
  getShowMenu():Observable<boolean>{
    return this.leaguesSubject$.asObservable()
  }
  toogleShow(){
    this.show = !this.show
    return this.leaguesSubject$.next(this.show)

  }
}
