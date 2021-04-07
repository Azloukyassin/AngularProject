import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cat:category= new category(0,"Unknow"); 

  constructor(private service:MyServiceService) { }

  ngOnInit(){
   this.service.sayHello("Category");
  }
  onSubmit(){
    console.log(this.cat);
  }
}
