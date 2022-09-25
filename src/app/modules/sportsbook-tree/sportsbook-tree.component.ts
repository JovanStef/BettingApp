import { Component, OnInit, Output } from '@angular/core';
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
  constructor(private requestService : SportsRequestService , private utilsService:SportsUtilsService ) { }

  ngOnInit(): void {
    this.loadSports()
  }
  async loadSports(){
    const sports:Sport[] = await this.requestService.getAll()
    this.sportsTree = await this.utilsService.sortSportsByPriority(sports , 'desc')
  }
  toggleShowCountries(i:number){
    this.showCountries[i] = !this.showCountries[i]
  }

}
