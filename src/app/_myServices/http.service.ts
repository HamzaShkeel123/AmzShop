import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private http:HttpClient) { }

  getById(path:string, id:number) {
    return this.http.get(path + '/' + id);
  }
  post(path:string, resource:number) {
    return this.http.post(path, resource);
  }
}
