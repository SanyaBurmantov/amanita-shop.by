import {ICartItem} from "../../types";
import {actionTypes, TypeActionCart} from "./types";

const initialState: ICartItem[] = []

export const cartReducer = (state = initialState, action:
    TypeActionCart) => {
    switch (action.type) {

        case actionTypes.CART_ADD_ITEM: {
            const cart = [...state]
            const {product, count, countFormOne, countFormTwo, finalPrice} = action.payload

            const foundProduct = cart.find(item => item.id === product.id)
            if (foundProduct) {
                foundProduct.count = count
            } else {
                cart.push({
                    ...product,
                    count, countFormOne, countFormTwo, finalPrice
                })
            }

            return cart
        }

        case actionTypes.CART_REMOVE_ITEM: {
            return state.filter(item => item.id !== action.payload)
        }

        case actionTypes.CART_REMOVE_ALL: {
            return state = [];
        }

        default:
            return state
    }
}