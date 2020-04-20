import { Component, AfterViewChecked, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SharedService } from './shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
   title = 'shoppingcart';
}
