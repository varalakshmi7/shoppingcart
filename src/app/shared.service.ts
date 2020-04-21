import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
   selectedItems: any;
   filterValue: number;

  constructor() { }
    getSelectedItems(){
        return this.selectedItems;
    }
    setSelectedItems(item){
        this.selectedItems = item;
    }
    getFilterValue(){
        return this.filterValue;
    }
    setFilterValue(value){
        this.filterValue = value;
    }
   
}

