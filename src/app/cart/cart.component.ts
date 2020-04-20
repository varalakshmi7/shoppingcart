import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { SharedService } from '../shared.service';
import {DOCUMENT} from '@angular/common';
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
@ViewChild ('quantity') ele: ElementRef;
  cartItems: any;
  total: number;
  counter$ : Observable<number>;
  constructor(private sharedService: SharedService,
     @Inject(DOCUMENT) document,
     public store : Store<AppState>
     ) { 
      this.counter$ = this.store.select('count'); 
      }

  ngOnInit(): void {
    this.cartItems = this.sharedService.getSelectedItems();
  }
  increase(){
      this.store.dispatch(new increment());
  }
  decrease(){
    this.store.dispatch(new decrement());
  }

}
