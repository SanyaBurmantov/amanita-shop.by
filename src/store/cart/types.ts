import {IProduct} from "../../types";

export enum actionTypes {
    CART_ADD_ITEM = 'CART_ADD_ITEM',
    CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
    CART_REMOVE_ALL = 'CART_REMOVE_ALL',
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

interface ICartRemoveAll {
    type: actionTypes.CART_REMOVE_ALL
}



export type TypeActionCart = ICartAddItem | ICartRemoveItem | ICartRemoveAll