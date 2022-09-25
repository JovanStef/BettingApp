import { Component, Input, OnInit, Output } from '@angular/core';
import { SportsUtilsService } from 'src/app/shared/services/sports/sports-utils.service';
import { Country } from 'src/app/types/sports.types';
import { LeaguesComponent } from '../leagues/leagues.component'
@Component({ 
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  @Input() countries:Country[] = []
  showLeagues:boolean[] = []
  constructor(private utilsService:SportsUtilsService) { }

  ngOnInit(): void {
   this.setCountries();
    
  }
  async setCountries(){
    this.countries = await this.utilsService.sortCountriesAplhabeticaly(this.countries,'asc')
  }

  toggleShowLeagues(i:number){
    this.showLeagues[i] = !this.showLeagues[i]
  }



}
