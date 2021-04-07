import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  myForm=new FormGroup({
    name:new FormControl(''),
    age:new FormControl(''),
    job:new FormControl(''),
    adress:new FormControl('')
  }); 
  constructor(private service:MyServiceService) { }

  ngOnInit(){
    this.service.sayHello("Client");
  }
   onSubmit(){
     console.log(this.myForm.value);
   }
}
