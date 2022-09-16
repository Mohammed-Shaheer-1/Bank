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
 database:any={
  1000:{accno:1000,pwd:2000}
 }
  constructor() { }

  ngOnInit(): void {
  }
  AccNo(event:any){
      this.Acno=event.target.value
      console.log("this pwd",this.Acno);  
  }
  Password(event:any){
    this.password=event.target.value
    console.log("this password",this.password);
    }


  login(){
    var acno=this.Acno
    var passw=this.password
    if(acno in  this.database){
    //  var crctpwd=
    
         if( passw==this.database[acno]["pwd"]){
          alert("login succesfull")

         }else{
          alert("incorrect password try again")
         }

    }else{
      alert("user dous not exist")
    }
      
    
  }

}
