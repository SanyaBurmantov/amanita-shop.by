import React from 'react';
import {IProduct} from "../../../types";
import ProductItem from "./ProductItem";

const products:IProduct[] = [
    {
        _id: 'hehe',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor',
        price: 4545,
        title: 'блябуду крута',
        count: 30
    },
    {
        _id: 'hea',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor1',
        price: 4445,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he234he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor2',
        price: 8745,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he12he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor3',
        price: 4145,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'hehe',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor',
        price: 4545,
        title: 'блябуду крута',
        count: 30
    },
    {
        _id: 'hea',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor1',
        price: 4445,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he234he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor2',
        price: 8745,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he12he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor3',
        price: 4145,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'hehe',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor',
        price: 4545,
        title: 'блябуду крута',
        count: 30
    },
    {
        _id: 'hea',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor1',
        price: 4445,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he234he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor2',
        price: 8745,
        title: 'бери, сука',
        count: 30
    },
    {
        _id: 'he12he',
        imagePath: 'https://htstatic.imgsmail.ru/pic_image/be89677b6a39f732bbf2b4c3d3a96bc3/840/840/1666361/',
        name: 'Muhomor3',
        price: 4145,
        title: 'бери, сука',
        count: 30
    },
]

const Products = () => {
    return (

                <div className="container">
                    <div className="products">
                {products.map(product => (
                    <ProductItem product={product} key={product._id}/>
                ))}
            </div>
        </div>
    );
};

export default Products;
