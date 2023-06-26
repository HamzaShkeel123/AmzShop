import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends HttpService{

  constructor(public httpClient:HttpClient) {
    super(httpClient)
   }

   baseUrl=""

   postPro(fileData:any)
   {
     
     debugger
     this.baseUrl='https://localhost:7292/api/product/submit-product';
 return this.httpClient.post(this.baseUrl,fileData);
   }
 
   getPro()
   {
     this.baseUrl='https://localhost:7292/api/product/get-product-all';
     return this.httpClient.get(this.baseUrl);
   }

   getCatActive()
   {
     this.baseUrl='https://localhost:7292/api/product/get-category-active';
     return this.httpClient.get(this.baseUrl);
   }
 
   getProById(cat_Id:number)
   {
    
     this.baseUrl='https://localhost:7292/api/product/get-product-by-id';
     return this.httpClient.get(this.baseUrl +'/'+cat_Id);
   }

   getProByCatId(cat_Id:number)
   {
    
     this.baseUrl='https://localhost:7292/api/product/get-product-by-cat-id';
     return this.httpClient.get(this.baseUrl +'/'+cat_Id);
   }

   delPro(pro_Id:number)
   {
    debugger
     this.baseUrl='https://localhost:7292/api/product/delete-product';
     return this.httpClient.get(this.baseUrl +'/'+pro_Id);
   }
 
   unDelPro(pro_Id:number)
   {
    debugger
     this.baseUrl='https://localhost:7292/api/product/un-delete-product';
     return this.httpClient.get(this.baseUrl +'/'+pro_Id);
   }


}
