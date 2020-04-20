import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.scss']
})
export class CartNotificationComponent implements OnInit {
  @Input() itemsCount: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gottoCart(){
    this.router.navigate(['/cartItems']);
  }

}
