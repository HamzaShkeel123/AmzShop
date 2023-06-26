import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService extends HttpService{

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postState(Data:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/state/submit-state';
    return this.httpClient.post(this.baseUrl,Data);
  }

  getState()
  {
    this.baseUrl='https://localhost:7292/api/state/get-state-all';
    return this.httpClient.get(this.baseUrl);
  }

  getCityActive()
  {
    this.baseUrl='https://localhost:7292/api/state/get-city-active';
    return this.httpClient.get(this.baseUrl);
  }
  getStateById(CId:number)
  {
    this.baseUrl='https://localhost:7292/api/state/get-state-by-id';
    return this.httpClient.get(this.baseUrl+'/'+CId);
  }
}
