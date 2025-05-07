import { Routes , RouterModule } from '@angular/router';
import { FormComponent } from './FormComponent/form/form.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: 'register', component: FormComponent },
    {path: 'login' , component:LoginComponent},
   { path: '' , component: HomeComponent}

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

// export const routes: Routes = [];
export class AppRoutingModule { }
