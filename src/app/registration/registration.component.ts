import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
   accountNo:number=0
   userName:string=""
   password:any=""
  
  constructor() { }

  ngOnInit(): void {
  }
   Accno(event:any){
    this.accountNo=event.target.value

   }
   user(event:any){
    this.userName=event.target.value
   }
   pwd(event:any){
      this.password=event.target.value

   }

  signup(){
    var array=[]
   var storage={
      accNo:this.accountNo,
      user:this.userName,
      pwd:this.password
       }
       array.push(storage)
       console.log(array);
       array= array.concat(JSON.parse(localStorage.getItem("db")||'[]'))
      console.log(array);
 
      localStorage.setItem("db",JSON.stringify(array))
       



  }

}
