import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService extends HttpService{

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  
  postCart(fileData:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/shoppingCart/submit-cart';
return this.httpClient.post(this.baseUrl,fileData);
  }

  postCartBundle(fileData:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/shoppingCart/submit-cart-bundle';
return this.httpClient.post(this.baseUrl,fileData);
  }

  getCartByUserId(userId:number)
  {
    this.baseUrl='https://localhost:7292/api/shoppingCart/get-cart-by-user';
    return this.httpClient.get(this.baseUrl +'/'+userId);
  }

  getBundleCartByUserId(userId:number)
  {
    this.baseUrl='https://localhost:7292/api/shoppingCart/get-bundle-cart-view-all';
    return this.httpClient.get(this.baseUrl +'/'+userId);
  }

}
