import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryDetailsService extends HttpService{

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postDeliveryDetails(Data:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/DeliveryDetails/submit-delivery-details';
    return this.httpClient.post(this.baseUrl,Data);
  }

  getCityActive()
  {
    this.baseUrl='https://localhost:7292/api/deliveryDetails/get-city-active';
    return this.httpClient.get(this.baseUrl);
  }

  getOrders()
  {
    this.baseUrl='https://localhost:7292/api/deliveryDetails/get-orders';
    return this.httpClient.get(this.baseUrl);
  }

  orderStatusDelivered(ddid:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/DeliveryDetails/order-status-delivered';
    return this.httpClient.get(this.baseUrl +"/"+ddid);
  }
}
