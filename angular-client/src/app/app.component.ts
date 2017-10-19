import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private router: Router){
     
   }
   
   ngOnInit(){
     this.router.navigate(['category']);
   }

   isLogin(){
     if(localStorage.getItem('token')){
        return true;
     }else{
        return false;
     }
   }

   onLogout(){
     localStorage.clear();
     this.router.navigate(['login']);
   }
}
