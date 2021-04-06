import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name='Mohamed Yassine'; 
   
   colors =['Red','Green','Bleu'] ; 
   myFunction()
   {
     alert('Slm');
   }
   logState:string="Login";
   isAuth:Boolean=false; 
   toggle() {
     this.isAuth =!this.isAuth;
     this.logState=this.isAuth?"logout":"Login" ; 
   }
}
