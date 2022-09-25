import { Injectable } from '@angular/core';
import { SortOrder } from 'src/app/types/sortOrder.types';
import { sortBy } from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }
  async sortObjectsAlphabeticaly(arr:Array<Object|any> , key:String , order:SortOrder):Promise<Array<any>>{
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        const res = sortBy(arr,[key],[order])
        resolve(res)
      },0)
    })
  }
  async sortObjectsByValue(arr:Array<Object|any> , key:String , order:SortOrder):Promise<Array<any>>{
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        const res = sortBy(arr,[key],[order])
        resolve(res)
      },0)
    })
  }

}
