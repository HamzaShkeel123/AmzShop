import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CityService extends HttpService{

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postCity(Data:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/city/submit-city';
    return this.httpClient.post(this.baseUrl,Data);
  }

  // getStateActive()
  // {
  //   this.baseUrl='https://localhost:7292/api/city/get-state-active';
  //   return this.httpClient.get(this.baseUrl);
  // }

  getCity()
  {
    this.baseUrl='https://localhost:7292/api/city/get-city-all';
    return this.httpClient.get(this.baseUrl);
  }

  getCityById(CId:number)
  {
    this.baseUrl='https://localhost:7292/api/city/get-city-by-id';
    return this.httpClient.get(this.baseUrl+'/'+CId);
  }
}
