import {Dispatch, SetStateAction} from "react";


export interface IProduct{
    id: string
    imagePath: string,
    name: string,
    subtitle: string,
    type: string,
    form: number,
    productDescription: {title?: string, subtitle?: string},
    productCountOne: IProductCountOne[],
    productCountTwo: IProductCountTwo[],
    text?: string,
    moreName?: string,
    more?: IMore[],
    slider?: ISlider[]
}

export interface IProductCountOne{
    id: number,
    count: number
}

export interface IProductCountTwo {
    id: number,
    count: number,
    coefficient: ICoefficient[]
}

export interface ICoefficient {
    id: number,
    count: number
}

export interface ISlider {
    id: number,
    image: string,
}

export interface IMore {
    id: number,
    title: string,
    subtitle: string,
}






export interface IPayment{
    id: number,
    image: string,
    location: string,
    subtitle: string,
    delivery: string,
    payment: string
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
    countFormOne: number
    countFormTwo: number
    finalPrice: number
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type FunctionUpdateFilter = (attr: IProduct[]) => void
export type FunctionNumberType = (id: number) => void;
export type FunctionRemoveHandler = (id: string) => void;
export type FunctionArrFilter = (Themes: string) => void;
export type FunctionArrFilters = (type: string) => void;
export type FunctionProdFilter = (Products: string) => void;


export class IPayment {
}