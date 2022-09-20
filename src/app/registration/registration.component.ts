import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  accno:any
   userName:string=""
   password:any=""
   
   constructor(private  db:DataserviceService,private  router:Router) { }
 
  ngOnInit(): void {
  }
   Accno(event:any){
    this.accno=event.target.value

   }
   user(event:any){
    this.userName=event.target.value
   }
   pwd(event:any){
      this.password=event.target.value

   }

  signup(){
  //   var array=[]
  //  var storage={
  //     accNo:this.accno,
  //     user:this.userName,
  //     pwd:this.password
  //      }
  //      array.push(storage)
  //      console.log(array);
  //      array= array.concat(JSON.parse(localStorage.getItem("db")||'[]'))
  //     console.log(array);
 
  //     localStorage.setItem("db",JSON.stringify(array))
  //     this.router.navigateByUrl('homepage')
  this.db.register(this.accno,this.userName,this.password,0)
  console.log(this.db.database);
      //  this.router.navigateByUrl('homepage')



  

    
  }

}
