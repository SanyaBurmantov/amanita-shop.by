import {ICartItem} from "../../types";
import {actionTypes, TypeActionCart} from "./types";

const initialState: ICartItem[] = []

export const cartReducer = (state = initialState, action:
    TypeActionCart) => {
    switch (action.type) {

        case actionTypes.CART_ADD_ITEM: {
            const cart = [...state]
            const {product, count, oneSelector, twoSelector, pizda} = action.payload

            const foundProduct = cart.find(item => item._id === product._id)
            if (foundProduct) {
                foundProduct.count = count
            } else {
                cart.push({
                    ...product,
                    count, oneSelector, twoSelector, pizda
                })
            }

            return cart
        }

        case actionTypes.CART_HAS_ITEM: {
            const cart = [...state]
            let res = false
            let foundProduct = cart.find(item => item._id === action.payload)
            if(foundProduct !== undefined){res = true}
            return false
        }




        case actionTypes.CART_REMOVE_ITEM: {
            return state.filter(item => item._id !== action.payload)
        }

        case actionTypes.CART_REMOVE_ALL: {
            return state = [];
        }

        default:
            return state
    }
}