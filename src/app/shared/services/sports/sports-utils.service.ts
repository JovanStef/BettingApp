import { Injectable } from '@angular/core';
import { SortOrder } from 'src/app/types/sortOrder.types';
import { Country, League, Sport } from 'src/app/types/sports.types';
import { SortService } from '../utils/sort.service';

@Injectable({
  providedIn: 'root'
})
export class SportsUtilsService {

  constructor(private sortService:SortService) { }
  async sortSportsByPriority(sports:Array<Sport> , order:SortOrder):Promise<Sport[] | any>{
    return await this.sortService.sortObjectsByValue(sports,'priority' , order)
  }
  async sortCountriesAplhabeticaly(countries:Array<Country> , order:SortOrder) : Promise<Country[] | any> {
    return await this.sortService.sortObjectsAlphabeticaly(countries,'name' , order)
  }
  async sortLeaguesAplhabeticaly(leagues:Array<League> , order:SortOrder) : Promise<League[] | any>{
    return await this.sortService.sortObjectsAlphabeticaly(leagues,'name' , order)
  }
}
