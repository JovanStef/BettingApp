import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutObserverService } from 'src/app/shared/services/layout/layout-observer.service';
import { SportsRequestService } from 'src/app/shared/services/sports/sports-request-service.service';
import { SportsUtilsService } from 'src/app/shared/services/sports/sports-utils.service';
import { Country, Sport } from 'src/app/types/sports.types';
import {CountriesComponent} from './countries/countries.component'

@Component({
  selector: 'app-sportsbook-tree',
  templateUrl: './sportsbook-tree.component.html',
  styleUrls: ['./sportsbook-tree.component.scss']
})
export class SportsbookTreeComponent implements OnInit {
  sportsTree:Sport[] = [];
  showCountries:boolean[]=[]
  showMenu = false;
  showMenuSubscription = new Subscription
  constructor(private sportRequestService : SportsRequestService , private utilsService:SportsUtilsService , private layoutObserverService:LayoutObserverService ) { }

  ngOnInit(): void {
    this.showMenuSubscription = this.layoutObserverService.getShowMenu().subscribe((n)=>this.toggleShowMenu(n))
    this.loadSports()
  }
  async loadSports(){
    const sports:Sport[] = await this.sportRequestService.getAll()
    this.sportsTree = await this.utilsService.sortSportsByPriority(sports , 'desc')
  }
  toggleShowCountries(i:number){
    this.showCountries[i] = !this.showCountries[i]
  }
  toggleShowMenu(show:boolean){
    this.showMenu = show
  }
  onDestroy(){
    this.showMenuSubscription.unsubscribe()
  }
}
