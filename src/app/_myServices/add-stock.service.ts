import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStockService extends HttpService {

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postStock(Data:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/AddStock/submit-add-stock';
    return this.httpClient.post(this.baseUrl,Data);
  }

  getStock()
  {
    this.baseUrl='https://localhost:7292/api/AddStock/get-add-stock-all';
    return this.httpClient.get(this.baseUrl);
  }

  getProductActive()
  {
    this.baseUrl='https://localhost:7292/api/AddStock/get-product-active';
    return this.httpClient.get(this.baseUrl);
  }

  getStockById(stockId:number)
  {
    this.baseUrl='https://localhost:7292/api/AddStock/get-add-stock-by-id';
    return this.httpClient.get(this.baseUrl+'/'+stockId);
  }
}
