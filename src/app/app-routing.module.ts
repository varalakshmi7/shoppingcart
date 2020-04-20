import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const routes: Routes = [
  {path: 'home', component: ShoppingListComponent },
  {path: 'cartItems', component: CartComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
