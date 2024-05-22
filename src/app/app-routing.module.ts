import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [{
  path:"about",
  component:Page2Component
},{
  path:"",
  component:AppComponent
},{
  path:"child",
  component:ChildComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
