import {IProduct} from "../../types";
import {actionTypes} from "./types";
import products from "../../pages/Products/components/Products";

export const addToCart = (product: IProduct, count: number) => ({
    type: actionTypes.CART_ADD_ITEM,
    payload: {product, count}
})

export const removeFromCart = (productId: string) => ({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: productId,
})