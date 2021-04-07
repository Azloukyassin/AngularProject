import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//Routing 
//Service
// Test
// Forms-Driven :classic Methode 
// Forms-Reactive : Better for UniTest  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    CategoryComponent,
    ClientComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
