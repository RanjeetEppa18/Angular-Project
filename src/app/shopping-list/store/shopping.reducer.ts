import * as ShoppingListActions from './shopping.action'
import { Ingredient } from '../shopping.model'
import { createSelector, createFeatureSelector } from '@ngrx/store'


export interface State{
    ingredients: Ingredient[],
    editedIngredient?: Ingredient,
    editedIngredientIndex?: number
}

export interface AppState{
    shopping: State
}

export const data: State = {
    ingredients: [new Ingredient('apple', 50),
    new Ingredient('mango', 60)],
    editedIngredient: null,
    editedIngredientIndex:-1
}

export function shoppingListReducer(state = data, action: ShoppingListActions.shoppingActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_ING:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }

        case ShoppingListActions.ADD_INGS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }

        case ShoppingListActions.UPDATE_ING:

            const ingredient = state.ingredients[state.editedIngredientIndex]
            const updatedIngredient = {
                ...ingredient,
                ...action.payload
            }
            const updatedIngredients = [...state.ingredients]
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient

            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient : null
            }

        case ShoppingListActions.DELETE_INGS:

            return {
                ...state,
                ingredients: state.ingredients.filter((ig, i) => { return i !== state.editedIngredientIndex})
            }

            case ShoppingListActions.START_EDIT:
            return {
                ...state,
                editedIngredientIndex: action.payload.index,
                editedIngredient: action.payload.editedIngredient
            }
            
            case ShoppingListActions.STOP_EDIT :
            return {
                ...state,
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        default:
            return state
    }
}


export const getIngredients = (state: State)=> state.ingredients
export const getIngredientsIndex = (state: State)=> state.editedIngredientIndex
export const getEditedIngredients = (state: State)=> state.editedIngredient

export const IngredientSelector = createFeatureSelector<State>('shopping')

export const CreateIngredients = createSelector(IngredientSelector,getIngredients)

export const CreateIngredientsIndex = createSelector(IngredientSelector,getIngredientsIndex)

export const CreateEditedIngredients = createSelector(IngredientSelector,getEditedIngredients)