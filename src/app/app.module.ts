import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { SortComponent } from './sort/sort.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FilterComponent } from './filter/filter.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../app/shared.service';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartService } from './cart.service';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from './reducer';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    SortComponent,
    ShoppingListComponent,
    FilterComponent,
    CartNotificationComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [SharedService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
