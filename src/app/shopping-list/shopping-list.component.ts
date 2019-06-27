import { Component, OnInit, } from '@angular/core';
import { Store, State } from '@ngrx/store';
// import { Item } from './shopping';
import { Observable } from 'rxjs';
import * as ShoppingListActions from './store/shopping.action'
import { Ingredient } from './shopping.model'
import * as fromShoppinglist from './store/shopping.reducer';
import * as fromShoppingRedducer from './store/shopping.reducer'
// interface AppState{
//   message: string
// }

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  itemvalue = ''
  qtyvalue:number = 0

  items$: Observable<fromShoppinglist.State>
  createItems$: Observable<Ingredient[]>
  createItemIndex$: Observable<number>
  createEditedData$: Observable<Ingredient>

  constructor(private store: Store<fromShoppinglist.AppState>) { } 

  ngOnInit() {
    this.items$ = this.store.select('shopping')
    this.createItems$ = this.store.select(fromShoppingRedducer.CreateIngredients)
    this.createItemIndex$ = this.store.select(fromShoppingRedducer.CreateIngredientsIndex)
    this.createEditedData$ = this.store.select(fromShoppingRedducer.CreateEditedIngredients)
    this.store.select('shopping').subscribe(res =>{
      if(res.editedIngredient){this.itemvalue = res.editedIngredient.item
      this.qtyvalue = res.editedIngredient.qty}
    })
  }



  // DISPATCHING ACTIONS BELOW //

  SpanishMessage(){
    this.store.dispatch({type: 'spanish'})
  }
  FrenchMessage(){
    this.store.dispatch({type: 'french'})
  } 
 
  addIngredient(){
    this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(this.itemvalue,this.qtyvalue)))
  }

  updateIngredient(){
    this.store.dispatch(new ShoppingListActions.UpdateIngredient(new Ingredient(this.itemvalue,this.qtyvalue)))
  }
  deleteIngredient(){
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
  }

  selecteditem(i: number,ingredient: Ingredient){
    this.store.dispatch(new ShoppingListActions.StartEditing({index: i,editedIngredient: ingredient}))
  }

  clearitem(){
    this.store.dispatch(new ShoppingListActions.StopEditing())
  }


}
