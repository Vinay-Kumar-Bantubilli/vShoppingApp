import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { BarsComponent } from './bars/bars.component';
import { KartComponent } from './kart/kart.component';
import { UserComponent } from './user/user.component';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProductsService } from './products.service';
import { DisplayItemComponent } from './displayitem/display-item.component';
// import { ɵɵsyntheticHostProperty } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';




const routes:Routes= [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'search', component:SearchComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'bars', component:BarsComponent},
  {path:'kart', component:KartComponent},
  {path:'user', component:UserComponent},
  {path:'user/:category', component:UserComponent},
  {path:'likes', component:LikesComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:name', component:ProductsComponent},
  {path:'products/:category', component:ProductsComponent},
  {path:'displayitem/:id', component:DisplayItemComponent},
  {path:'products/:color', component:ProductsComponent},
  {path:'**', component:NotfoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    AboutComponent,
    BarsComponent,
    KartComponent,
    UserComponent,
    LikesComponent,
    NavbarComponent,
    ProductsComponent,
    LoginComponent,
    SearchComponent,
    DisplayItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
