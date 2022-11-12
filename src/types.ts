import React, {Dispatch, SetStateAction} from "react";
import Products from "./pages/Products/components/Products";

export interface IProduct{
    _id: string
    name: string
    title: string
    form: number //1- капсулы 2- порошок 3- шляпки
    imagePath: string
    price: number
    capacity: number[]
    count: number
    type: string
    text: string
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

export interface IComment {
    id: any
    body: any
    username: any
    userId: any
    parentId: any
    createdAt: any
}


export interface ICartItem extends IProduct{
    count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type FunctionlikeCount = (id: number) => void;
export type FunctionArrFilter = (Themes: string) => void;
export type FunctionProdFilter = (Products: string) => void;




