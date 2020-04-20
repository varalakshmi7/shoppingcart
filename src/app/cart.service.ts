import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CartService {
    private _json = 'assets/cart.json';
  constructor(private http: HttpClient) { }
  public getJson(): Observable<ICart>{
    return this.http.get<ICart>(this._json);
  }
}

export interface ICart {
    id: number,
    name: string,
    price: number,
    discount: number,
    category: string,
    img_url: string
}