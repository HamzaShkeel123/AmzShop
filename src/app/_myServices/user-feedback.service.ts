import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService extends HttpService{

  constructor(public httpClient:HttpClient) {
    super(httpClient)
   }

   baseUrl=""
   getUserFeedback()
   {
     this.baseUrl='https://localhost:7292/api/userFeedback/get-feedback-all';
     return this.httpClient.get(this.baseUrl);
   }
}
