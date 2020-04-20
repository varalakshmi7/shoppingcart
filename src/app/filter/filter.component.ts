import { Component, OnInit, Inject, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
import {CartService} from '../cart.service';
import { from } from 'rxjs';
import { ICart } from '../shopping-list/Cart';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild('rangeVal') myDiv: ElementRef;
  @Output() filterData = new EventEmitter();
  itemRange: number;
  items : Array<ICart> = [];
  cartItems: any;
  filterItems: number;
  constructor(public cartService: CartService) { 
    
  }

  ngOnInit(): void {
   
  }

  applyFilter(){
    this.itemRange = parseInt(this.myDiv.nativeElement.value);
    this.cartService.getJson().subscribe((cart: ICart) =>{
     this.items.push(cart);
     this.cartItems = this.items[0];
     this.filteredCart(this.cartItems);
    });
  }

  filteredCart(cartItems){
    var filteredCart = cartItems.filter((item)=>{
      this.filterItems = item.price - (item.price * item.discount/100);
            return this.filterItems <= this.itemRange;
    });
    this.filterData.emit(filteredCart);
  }

}
