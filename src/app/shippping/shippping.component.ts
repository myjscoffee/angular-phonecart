import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shippping',
  templateUrl: './shippping.component.html',
  styleUrls: ['./shippping.component.css']
})
export class ShipppingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();
  constructor(private cartService: CartService) {}

  ngOnInit() {}
}
