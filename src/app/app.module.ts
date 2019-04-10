import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ItemManagerComponent } from './components/item-manager/item-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactFormComponent,
    ItemManagerComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
