import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  sayHello(componentName:string)
  {
    console.log("Hello From the component:"+ componentName);
  }
}
