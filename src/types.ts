import {Dispatch, SetStateAction} from "react";
import exp from "constants";

export interface IProduct{
    _id: string
    name: string
    title: string
    imagePath: string
    price: number
    count: number
    type: string
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
    PostData: string
}

export interface IComment {
    id: string,
    body: string,
    username: string,
    userId: string,
    parentId: null | string,
    Data: string
}


export interface ICartItem extends IProduct{
    count: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type FunctionlikeCount = (id: number) => void;
export type FunctionArrFilter = (Themes: string) => void;





