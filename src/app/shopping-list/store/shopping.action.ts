import { Action } from '@ngrx/store'
import { Actions } from "@ngrx/effects";
import { Ingredient } from '../shopping.model';

export const ADD_ING = 'ADD_ING'
export const ADD_INGS = 'ADD_INGS'
export const UPDATE_ING = 'UPDATE_ING'
export const DELETE_INGS = 'DELETE_INGS'
export const START_EDIT = 'START_EDIT'
export const STOP_EDIT = 'STOP_EDIT'

export class AddIngredient implements Action {
    readonly type = ADD_ING  
    constructor(public payload:Ingredient){}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGS  
    constructor(public payload:Ingredient[]){}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_ING
    constructor(public payload: Ingredient){}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGS
}

export class StartEditing implements Action {
    readonly type = START_EDIT
    constructor(public payload:{index: number,editedIngredient: Ingredient}){}
}

export class StopEditing implements Action {
    readonly type = STOP_EDIT
}
export type shoppingActions =
 | AddIngredient
 | AddIngredients
 | UpdateIngredient
 | DeleteIngredient
 | StartEditing
 | StopEditing