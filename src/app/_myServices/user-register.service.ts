import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService extends HttpService {

  constructor(public httpClient:HttpClient) { 
    super(httpClient)
  }

  baseUrl=""
  // formData:Employee=new Employee();

  postUser(resource:any){
    debugger
    this.baseUrl='https://localhost:7292/api/userSignup/submit-signup';
    return this.httpClient.post(this.baseUrl,resource);
  }

  getSignup()
  {
    this.baseUrl='https://localhost:7292/api/userSignup/get-signup-all';
    return this.httpClient.get(this.baseUrl);
  }

  getSignupById(sinupId:number)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/userSignup/get-signup-by-id';
    return this.httpClient.get(this.baseUrl +'/'+sinupId);
  }


  //login

  getLoginByModel(resource:any)
  {
   debugger
    this.baseUrl='https://localhost:7292/api/UserLogin/get-user-login-by-model';
    return this.httpClient.post(this.baseUrl,resource);
    
  }

}
