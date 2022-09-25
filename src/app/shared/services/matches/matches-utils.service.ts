import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash';
import { OddsLayout, OddsLayoutItem } from 'src/app/types/oddsLayout.types';
import { SortOrder } from 'src/app/types/sortOrder.types';
import { SortService } from '../utils/sort.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesUtilsService {

  constructor(private sortService:SortService) { }
  async sortOddsLayout(oddsLayout:Array<OddsLayout[]> , order:SortOrder):Promise<OddsLayout[] | any>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
    resolve(this.sortByPriority(oddsLayout))
  },0)
})
  }
  sortByPriority(arr:any = [] ,key:any = 'priority' , order:any = 'asc'){
      arr = cloneDeep(arr)
      const sorted = arr.sort((a:any, b:any) => {
        const layoutOddA = order === "asc" ? a[key] : b[key];
        const layoutOddB = order === "asc" ? b[key] : a[key];

        if(arr.indexOf(a) + 2 ===  arr.length){
          b.odds = b.odds && this.sortByPriority(b?.odds)
        }else{
          a.odds = a.odds && this.sortByPriority(a?.odds)
        }
        
        if (layoutOddA < layoutOddB) {
          return -1;
        }
        if (layoutOddA > layoutOddB) {
          return 1;
        }
        return 0;
      });
    return sorted
  }

  async pairMatchesOdds(oddsLayout:any , matches:any):Promise<any>{
    matches = cloneDeep(matches)

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const paired = matches.map( (match:any) =>{
          const sortedOdds = oddsLayout.map((layoutOdd:any) => {
            let matchOdds = match.odds[layoutOdd.index]
            if(matchOdds){
              return this.sortMatchOddsOnLayout(matchOdds , layoutOdd.odds)
            }
            else{
              return Array.from({ length: layoutOdd.odds.length } , () => ({ value:'-' }))
            }
          })
          match.odds = sortedOdds.flat()
          return match
        })
        resolve(paired)
      },0)
    })
    
  }
  sortMatchOddsOnLayout(matchOdds:any , oddsLayoutItems:any){
    return matchOdds.sort((a:any,b:any) => {
      const indexA = oddsLayoutItems.findIndex((odd:any) => a.name === odd.id);
      const indexB = oddsLayoutItems.findIndex((odd:any) => b.name === odd.id);
    return indexA - indexB; 
  });
    
  }
}
