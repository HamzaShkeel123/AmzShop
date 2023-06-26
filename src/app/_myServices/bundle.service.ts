import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BundleService extends HttpService {

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postBundle(Data:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/bundle/submit-bundle';
    return this.httpClient.post(this.baseUrl,Data);
  }

  getBundle()
  {
    this.baseUrl='https://localhost:7292/api/bundle/get-bundle-all';
    return this.httpClient.get(this.baseUrl);
  }

  getBundleDetailView()
  {
    this.baseUrl='https://localhost:7292/api/bundle/get-bundle-view-all';
    return this.httpClient.get(this.baseUrl);
  }

  getBundleById(b_id:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/bundle/get-bundle-by-id';
    return this.httpClient.get(this.baseUrl +'/'+b_id);
  }

}
