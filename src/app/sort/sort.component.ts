import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {CartService} from '../cart.service';
import { ICart } from '../shopping-list/Cart';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Output() sortedPrices = new EventEmitter();
  items : Array<ICart> = [];
  cartItems: any;
  sortPrice: string;
  cartItemsSort: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  sortCartPrice(price){
    this.sortPrice = price;
    this.cartService.getJson().subscribe((cart: ICart) =>{
      this.items.push(cart);
      this.cartItems = this.items[0];
      this.sortingPrice(this.cartItems, this.sortPrice);
     });
  }
  sortingPrice(cartItems, sortPrice){
    this.cartItemsSort = cartItems.sort((a,b) => {
      var afterDiscountA = a.price - (a.price * a.discount/100);
      var afterDiscountB = b.price - (b.price * b.discount/100);
      if(sortPrice === 'high'){
        if(afterDiscountA > afterDiscountB) return -1;
      }else {
        if(afterDiscountA < afterDiscountB) return -1;
      }
      return 0;
    });
    this.sortedPrices.emit(this.cartItemsSort);
  }
  

}
