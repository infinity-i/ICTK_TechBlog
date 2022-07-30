import { Component, OnInit } from '@angular/core';


import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signup(){
    console.log("register button hit");
    console.log(this.registerUserData);
     }
     
  registerUserData = new AuthData('','','','','','');
     
  
  constructor(public auth:AuthService,public router:Router) { }
  
    
    ngOnInit(): void {
      
  }
  onSubmit(){
    alert("Succesfully registered");
    this.auth.registerUser(this.registerUserData);
    console.log("auth service called");
    // .subscribe(
    //   (      res: { token: string; }) => {
    //     console.log(res)
    //     localStorage.setItem('token', res.token)
        this.router.navigate(['/login']);
      
    //   ( err: any) => console.log(err)
    // )
  };

 
  


  
}
