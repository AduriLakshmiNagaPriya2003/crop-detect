import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { BananaspeckleComponent } from './bananaspeckle/bananaspeckle.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ScaleComponent } from './scale/scale.component';
import { BacterialComponent } from './bacterial/bacterial.component';
import { BrownleafComponent } from './brownleaf/brownleaf.component';
import { CitrusComponent } from './citrus/citrus.component';
import { GreyleafComponent } from './greyleaf/greyleaf.component';
import { LaceComponent } from './lace/lace.component';
import { IronComponent } from './iron/iron.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",redirectTo:"Home", pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Aboutus",component:AboutusComponent},
  {path:"Contactus",component:ContactusComponent},
  {path:"Library",component:LibraryComponent},
  {path:"Thankyou",component:ThankyouComponent},
  {path:"Bananaspeckle",component:BananaspeckleComponent},
  {path:"Login",component:LoginComponent},
  {path:"Products",component:ProductsComponent},
  {path:"Scale",component:ScaleComponent},
  {path:"Bacterial",component:BacterialComponent},
  {path:"Brownleaf",component:BrownleafComponent},
  {path:"Citrus",component:CitrusComponent},
  {path:"Greyleaf",component:GreyleafComponent},
  {path:"Lace",component:LaceComponent},
  {path:"Iron",component:IronComponent},
  {path:"Signup",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
