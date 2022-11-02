 import React, {useState} from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductItem";
 import {Filter} from "./Filter";
 import {posts} from "../../../data/Posts";



interface Props {
}

const Products = () => {

    const [filtred, setFiltred] = useState(products)

    function ArrFilter(type: string) {
        if (type === 'all') {
            setFiltred(products)
        } else {
            let newArr = [...products].filter(products => products.type === type)
            setFiltred(newArr)
        }
    }

    return (
        <div>
            <div className="container">
                <h3>Amanita-Shop / Магазин</h3>
                <button onClick={() => ArrFilter('all')}>Все</button>
                <Filter ProdFilter={ArrFilter}/>
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

