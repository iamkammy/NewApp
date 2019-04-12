import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PostsComponent } from './components/posts/posts.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ItemManagerComponent } from './components/item-manager/item-manager.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DataService} from './data.service';

import{HttpClientModule} from '@angular/common/http';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MovieinfoComponent } from './components/movieinfo/movieinfo.component';
import { MoviedetailsService } from './moviedetails.service';
import { ImdbComponent } from './components/imdb/imdb.component';
import {WeatherService} from './weather.service';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactFormComponent,
    ItemManagerComponent,
    NavbarComponent,
    PostsComponent,
    CalculatorComponent,
    MovieinfoComponent,
    ImdbComponent,
    WeatherComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path: 'items', component: ItemManagerComponent},
      {path: 'contacts', component:ContactFormComponent },
      {path: 'posts', component: PostsComponent},
      {path: 'Calculator', component: CalculatorComponent},
      {path: 'MovieInfo', component: MovieinfoComponent},
      {path: 'imdb', component: ImdbComponent},
      {path: 'Weather', component: WeatherComponent},
    ])
    // ReactiveFormsModule
  ],
  providers: [DataService,MoviedetailsService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
