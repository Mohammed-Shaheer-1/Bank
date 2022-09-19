import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 data:string="enter the account number"
 test:string="Happy banking"
 Acno:number=0
 password:number=0

  constructor() { }

  ngOnInit(): void {
  }
  AccNo(event:any){
      this.Acno=event.target.value

      
 
  }
  Password(event:any){
    this.password=event.target.value
 
    }


  login(){
    var acno=this.Acno
    var passw=this.password
    var data:any=localStorage.getItem("db")
    var test =JSON.parse(data)
    console.log("test",test);
   var flag=0
    for(let ts of test){

       
   if(ts.accNo==acno && ts.pwd==passw){
     flag=1
     break
   }else{
  alert("Not match")
    }
 }
    if(flag==1){
      alert("login succesfull")
    }
    

   





 
  }

}
