import React, {Dispatch, SetStateAction} from "react";
import Products from "./pages/Products/components/Products";

export interface IProduct{
    _id: string
    name: string
    title: string
    form: number
    imagePath: string
    price: IPrice[]
    type: string
    text: string,
    coefficient: ICoefficient[]

}

export interface IRewiews{
    id: number
    userName: string
    rate: string
    userImage: string
    text: string
    Data: any
    email: string

}

export interface IPost {
    id: number,
    title: string,
    subtitle: string,
    image: string,
    likeCount: number,
    Themes: string,
    liked: boolean,
    views: number,
    ViewedByUser: boolean,
    PostData: string,
    Comments: IComment[]
}

export interface IPrice {
    id: number
    count: number,
}

export interface ICoefficient {
    id: number
    price: number,
    coff: IGovno[]
}

export interface IGovno {
    id: number
    coefficient: number
}


export interface IComment {
    id: any
    body: any
    username: any
    userId: any
    parentId: any
    createdAt: any
}

export interface IPayment {
    id: number,
    image: string,
    location: string,
    subtitle: string,
    delivery: string,
    payment: string
}




export interface ICartItem extends IProduct{
    count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type FunctionlikeCount = (id: number) => void;
export type FunctionArrFilter = (Themes: string) => void;
export type FunctionProdFilter = (Products: string) => void;


export class IPayment {
}