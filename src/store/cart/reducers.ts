import {ICartItem} from "../../types";
import {actionTypes, TypeActionCart} from "./types";

const initialState:ICartItem[] = []

export const cartReducer = (state = initialState, action:
    TypeActionCart) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
        {
            const cart = [...state]
            const {count, product} = action.payload

            const foundProduct = cart.find(item => item._id === product._id)
            if(foundProduct) {
                foundProduct.count = count
            }else {
                cart.push({
                    ...product,
                    count
                })
            }

            return cart
        }

        case actionTypes.CART_REMOVE_ITEM: {
            return state.filter(item => item._id !== action.payload)
        }
        default:
            return state
    }
}