import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  database:any={
    1000:{acno:1000,uname:"feer",password:1000,salary:0}
  }

  constructor() { }
  register(acno:any,uname:any,password:any,balance:any){
    if(acno in this.database){
      return false;
    }else{
      this.database[acno]={
        name:uname,
        accountnumber:acno,
        password:password,
      };
      return true;
      }
    }



}
