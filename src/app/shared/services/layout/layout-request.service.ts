import { Injectable } from '@angular/core';
import layoutJson from "../../../../assets/json/layout.json"

@Injectable({
  providedIn: 'root'
})
export class LayoutRequestService {

  constructor() { }

  async getAll(){
    try {
      const {data} = await import("../../../../assets/json/layout.json");
      return data
    } catch (error) {
      throw {message:'No data'}
    }
  }
}
