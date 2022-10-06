import React from 'react';
import {IProduct} from "../../../types";
import ProductItem from "./ProductItem";


interface Props {
}
export const Products = (props: Props) => {
    return (
        <div>Products</div>
    )
}

const products:IProduct[] = [
    {
        _id: 'hehe',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor1',
        price: 4545,
        title: 'блябуду крута',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'hea',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor2',
        price: 4445,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he234he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor3',
        price: 8745,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he12he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor4',
        price: 4145,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he23e',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor5',
        price: 4545,
        title: 'блябуду крута',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he546a',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor6',
        price: 4445,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he276834he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor7',
        price: 8745,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he1254he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor8',
        price: 4145,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'heh3457e',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor9',
        price: 4545,
        title: 'блябуду крута',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he9876a',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor10',
        price: 4445,
        title: 'null',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he234567he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor11',
        price: 8745,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
    {
        _id: 'he17652he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor12',
        price: 4145,
        title: 'бери, сука',
        count: 30,
        type: 'россыпь ебана'
    },
]

const Products = () => {
    return (
        <div>
            <div className="container">
                <div className="products">
                    {products.map(product => (
                        <ProductItem product={product} key={product._id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;

