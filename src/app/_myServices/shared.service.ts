import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly checkUserKey: string;


  

  get checkUser(): string {
    return localStorage.getItem(this.checkUserKey);
  }

  set checkUser(value: string) {
    localStorage.setItem(this.checkUserKey, value);
  }


 

  constructor() { }
}
