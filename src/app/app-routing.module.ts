import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Test1Component} from'./Component/test1/test1.component';
import {Test2Component} from'./Component/test2/test2.component';
import {Test3Component} from'./Component/test3/test3.component';

const routes: Routes = [
  {path: '',component: Test1Component},
  {path: 'test',component: Test1Component},
  {path: 'test2',component: Test2Component},
  {path: 'test3',component: Test3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
