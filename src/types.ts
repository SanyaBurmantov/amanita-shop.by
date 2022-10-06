import {Dispatch, SetStateAction} from "react";

export interface IProduct{
    _id: string
    name: string
    title: string
    imagePath: string
    price: number
    count: number
    type: string
}

export interface ICartItem extends IProduct{
    count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>