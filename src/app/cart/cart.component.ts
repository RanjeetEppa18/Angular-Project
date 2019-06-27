import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Ingredient } from '../shopping-list/shopping.model';
import { shoppingActions, AddIngredients } from '../shopping-list/store/shopping.action'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:Ingredient[] = [
    new Ingredient('Burger',2),
    new Ingredient('Pizza',4)

  ]
  constructor(private store: Store<{shopping:{items:Ingredient[]}}>) { }

  ngOnInit() {
    console.log(this.cartItems)

  }

  sentoStore(){
    this.store.dispatch(new AddIngredients(this.cartItems))
  }

}
