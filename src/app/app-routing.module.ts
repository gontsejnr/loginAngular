import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{path:"", component:LoginComponent},{path:"menu",component:MenuComponent, children: [{path:"home", component:HomeComponent},
{path:"about", component:AboutComponent},{path:"contact", component:ContactComponent}]},{path:"detail",component:DetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
