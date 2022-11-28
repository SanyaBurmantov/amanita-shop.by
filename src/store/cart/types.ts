import {IProduct} from "../../types";

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}

interface ICartAddItemPayload {
    product: IProduct
    count: number
    oneSelector: any
    twoSelector: any
    pizda: number

}

interface ICartAddItem {
    type: actionTypes.CART_ADD_ITEM
    payload: ICartAddItemPayload
}

interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM
    payload: string
}

export type TypeActionCart = ICartAddItem | ICartRemoveItem