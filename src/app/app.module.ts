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
import { KartComponent } from './kart/kart.component';
import { UserComponent } from './user/user.component';
import { LikesComponent } from './likes/likes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { ProductsService } from './products.service';
import { DisplayItemComponent } from './displayitem/display-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './services/cart.service';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JsonPipe } from '@angular/common';
import { UsersService } from './services/users.service';
import { WishlistService } from './services/wishlist.service';
import { FooterComponent } from './footer/footer.component';
import { OrderingpageComponent } from './orderingpage/orderingpage.component';
import { OrderService } from './services/order.service';




const routes:Routes= [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },

  {path:'loginsuccess', component:LoginsuccessComponent},
  {path:'search', component:SearchComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'kart', component:KartComponent},
  {path:'user', component:UserComponent},
  {path:'user/:category', component:UserComponent},
  {path:'likes', component:LikesComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:name', component:ProductsComponent},
  {path:'products/:category', component:ProductsComponent},
  {path:'displayitem/:id', component:DisplayItemComponent},
  {path:'products/:color', component:ProductsComponent},
  { path:'orderingpage', component:OrderingpageComponent },
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
    KartComponent,
    UserComponent,
    LikesComponent,
    NavbarComponent,
    ProductsComponent,
    SearchComponent,
    DisplayItemComponent,
    LoginsuccessComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    OrderingpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    JsonPipe

  ],
  providers: [ProductsService, CartService, UsersService, WishlistService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
