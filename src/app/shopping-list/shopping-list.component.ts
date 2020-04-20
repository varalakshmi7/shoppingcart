import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICart } from './Cart';
import { SharedService } from '../shared.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  @Input() filteredData;
  cartItem: Array<ICart>=[];
  selectedItems = [];
  itemsCount: number;
  displayItems: any;
  filterItems: number;
  constructor(private http: HttpClient, 
    private cartService: CartService,
    private sharedService: SharedService) { 
   }

  ngOnInit(): void {
    this.cartService.getJson().subscribe((data : ICart) => {
    this.cartItem.push(data);
    this.displayItems = this.cartItem[0];
      
    });
  }

  getFilterCart($event){
      this.displayItems = $event;
  }

  getSearchedItem($event){
      this.displayItems = $event;
  }

  getSortPrices($event){
    this.displayItems = $event;
  }

  onSelectItem(item: ICart){
    var s = this.selectedItems.find(sitem => {
      return sitem === item;
    });
    if(s){
     alert("duplicate item selected");
    } else {
      this.selectedItems.push(item);
    this.sharedService.setSelectedItems(this.selectedItems);
    this.itemsCount = this.selectedItems.length;
    }
   
    
    
  }

 

}


