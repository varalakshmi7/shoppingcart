import { Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { increment, decrement } from '../action';
import { Store } from '@ngrx/store';
import { AppState } from '../state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any;
  total: number;
  counter$ : Observable<number>;
  itemCount : any;
  priceDetails = {price: null, discount: null, total: null};
  constructor(private sharedService: SharedService,
     public store : Store<AppState>
     ) { 
      this.counter$ = this.store.select('count'); 
      }

  ngOnInit(): void {
    this.cartItems = this.sharedService.getSelectedItems();
    if(this.cartItems){
      this.cartItems.forEach((item) => {
      this.priceDetails.discount = item.discount;
      this.priceDetails.price = item.price;
      this.priceDetails.total = item.price - (item.price * item.discount/100);
      });
    }
   
  }
  increase(item){
      this.store.dispatch(new increment());
      this.counter$.subscribe(data => {
        this.itemCount = data['count'];
        this.priceDetails.price = item.price * this.itemCount;
        this.priceDetails.total = this.priceDetails.price - (this.priceDetails.price * this.priceDetails.discount/100);
      });
     
  }
  decrease(item){
  
      this.store.dispatch(new decrement());
      this.counter$.subscribe(data => {
        this.itemCount = data;
      });
    
  }

  removeItem(i) {
      if(i > -1){
        this.cartItems.splice(i,1);
       }
       if(this.cartItems.length === 0){
        this.priceDetails.discount = null;
        this.priceDetails.price = null;
        this.priceDetails.total = null;
       }
  }

}
