import { Injectable } from '@angular/core';
import { Sport } from 'src/app/types/sports.types';
import sportsJson from "../../../../assets/json/tree.json"
@Injectable({
  providedIn: 'root'
})
export class SportsRequestService {

  constructor() { }
  async getAll() : Promise<Sport[]>{
 
    try {
      const {data} = await import("../../../../assets/json/tree.json");
      return data
     } catch (error) {
       throw {message:'No data'}
     }
}
}
