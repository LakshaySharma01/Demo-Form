import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './FormComponent/form/form.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: 'register', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '', component: HomeComponent },
  { path: 'search' , component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

// export const routes: Routes = [];
export class AppRoutingModule {}
