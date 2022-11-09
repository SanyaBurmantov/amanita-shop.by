import React, {Dispatch, SetStateAction} from "react";

export interface IProduct{
    _id: string
    name: string
    title: string
    imagePath: string
    price: number
    count: number
    type: string
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
export type FunctionHandler = (e: any) => void;




