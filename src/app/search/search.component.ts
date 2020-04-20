import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service'
import {CartService} from '../cart.service';
import { ICart } from '../shopping-list/Cart';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchCartItem = new EventEmitter();
  title = 'shoppingcart';
  items : Array<ICart> = [];
  cartItems: any;
  searchcartItem : string;
  Item: any;
  constructor(private cartService: CartService){}
  ngOnInit(){

  }

  searchItem(searchItem){
    this.searchcartItem = searchItem;
    this.cartService.getJson().subscribe((cart: ICart) =>{
      this.items.push(cart);
      this.cartItems = this.items[0];
      this.searchCart(this.cartItems);
     });
  }

  searchCart(cartItems){
    if(this.searchcartItem !== ""){
      this.Item = cartItems.filter((item) => {
        return this.searchcartItem.toLowerCase().indexOf(item.name.toLowerCase()) !== -1
      });
      this.searchCartItem.emit(this.Item);
    } else {
      this.searchCartItem.emit(cartItems);
    }
   
  }
}
