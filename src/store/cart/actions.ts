import {IProduct} from "../../types";
import {actionTypes} from "./types";

export const addToCart = (product: IProduct, count: number, countFormOne: number, countFormTwo: number, finalPrice: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {product, count, countFormOne, countFormTwo, finalPrice}
})

export const removeFromCart = (productId: string) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId,
})

export const removeCartAll = () => ({
    type: actionTypes.CART_REMOVE_ALL,
})
