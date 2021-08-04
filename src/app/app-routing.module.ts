import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path      :'',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path      :'login',
    component : LoginComponent
  },
  {
    path      :'register',
    component : RegisterComponent
  },
  {
    path      :'dashboard',
    component : DashboardComponent,
    children  : [
      {
        path  :'user-register',
        component: UserCreateComponent
      },
      {
        path  : 'user-list',
        component : UserListComponent,
        children  : [
          {
            path  : 'user-edit',
            component : UserEditComponent
          }
        ]
      },
      
    ]
  },
  {
    path      :'**',
    component : PageNotFoundComponent
  }
  // {
  //   path      :'/forget-password',
  //   component : ForgetPasswordComponent
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
