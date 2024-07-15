import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LibraryComponent } from './library/library.component';
import { CustomerComponent } from './customer/customer.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegisterComponent } from './register/register.component';
import { BananaspeckleComponent } from './bananaspeckle/bananaspeckle.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ScaleComponent } from './scale/scale.component';
import { IronComponent } from './iron/iron.component';
import { LaceComponent } from './lace/lace.component';
import { BrownleafComponent } from './brownleaf/brownleaf.component';
import { CitrusComponent } from './citrus/citrus.component';
import { GreyleafComponent } from './greyleaf/greyleaf.component';
import { BacterialComponent } from './bacterial/bacterial.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LibraryComponent,
    CustomerComponent,
    ThankyouComponent,
    RegisterComponent,
    BananaspeckleComponent,
    LoginComponent,
    ProductsComponent,
    ScaleComponent,
    IronComponent,
    LaceComponent,
    BrownleafComponent,
    CitrusComponent,
    GreyleafComponent,
    BacterialComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
