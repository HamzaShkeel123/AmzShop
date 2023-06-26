import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class BundleDetailService extends HttpService {

 
  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""
  // formData:Employee=new Employee();

  postBundleDetail(resource:any){
    debugger
    this.baseUrl='https://localhost:7292/api/bundleDetail/submit-bundle-detail';
    return this.httpClient.post(this.baseUrl,resource);
  }

  getBundleDetail()
  {
    this.baseUrl='https://localhost:7292/api/bundleDetail/get-bundle-detail-all';
    return this.httpClient.get(this.baseUrl);
  }

  getBundleDetailById(bundleDetailId:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/bundleDetail/get-bundle-detail-by-id';
    return this.httpClient.get(this.baseUrl +'/'+bundleDetailId);
  }

  getProductActive()
  {
    this.baseUrl='https://localhost:7292/api/bundleDetail/get-product-active';
    return this.httpClient.get(this.baseUrl);
  }
  getBundleActive()
  {
    this.baseUrl='https://localhost:7292/api/bundleDetail/get-bundle-active';
    return this.httpClient.get(this.baseUrl);
  }

  getProductByBundleIdActive(bundleId:number)
  {
    this.baseUrl='https://localhost:7292/api/bundleDetail/get-product-by-bundle-id-active';
    return this.httpClient.get(this.baseUrl+'/'+bundleId);
  }

}
