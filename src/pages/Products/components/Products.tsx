import React from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductItem";


interface Props {
}

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

