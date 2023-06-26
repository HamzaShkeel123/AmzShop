import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductPromotionService extends HttpService{

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postProductPromotion(fileData:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/ProductPromotion/submit-product-promotion';
return this.httpClient.post(this.baseUrl,fileData);
  }

  getProductPromotion()
  {
    this.baseUrl='https://localhost:7292/api/ProductPromotion/get-product-promotion-all';
    return this.httpClient.get(this.baseUrl);
  }

  //category product page
  getProductActive()
  {
    this.baseUrl='https://localhost:7292/api/ProductPromotion/get-product-active';
    return this.httpClient.get(this.baseUrl);
  }


  getProductPromotionActive()
  {
    this.baseUrl='https://localhost:7292/api/ProductPromotion/get-product-promotion-active';
    return this.httpClient.get(this.baseUrl);
  }

  getProductPromotionById(ppId:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/ProductPromotion/get-product-promotion-by-id';
    return this.httpClient.get(this.baseUrl +'/'+ppId);
  }

  
}
