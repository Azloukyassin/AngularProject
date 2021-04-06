import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'article', 
    component:ArticleComponent,
    pathMatch:'full'
  },
  
  {
    path:'category', 
    component:CategoryComponent,
    pathMatch:'full'
  },
  
  {
    path:'client', 
    component:ClientComponent,
    pathMatch:'full'
  },
  
  {
    path:'login', 
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
