import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends HttpService {

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""

  postCat(fileData:any)
  {
    
    debugger
    this.baseUrl='https://localhost:7292/api/category/submit-category';
return this.httpClient.post(this.baseUrl,fileData);
  }

  getCat()
  {
    this.baseUrl='https://localhost:7292/api/category/get-category-all';
    return this.httpClient.get(this.baseUrl);
  }

  //category product page
  getCatActive()
  {
    this.baseUrl='https://localhost:7292/api/category/get-category-active';
    return this.httpClient.get(this.baseUrl);
  }
  getCatById(cat_Id:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/category/get-category-by-id';
    return this.httpClient.get(this.baseUrl +'/'+cat_Id);
  }

  delCat(cat_Id:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/category/delete-category';
    return this.httpClient.get(this.baseUrl +'/'+cat_Id);
  }

  unDelCat(cat_Id:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/category/un-delete-category';
    return this.httpClient.get(this.baseUrl +'/'+cat_Id);
  }

}
