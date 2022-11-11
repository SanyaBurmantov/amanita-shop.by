 import React, {useState} from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductItem";
 import {Filter} from "./Filter";
 import {posts} from "../../../data/Posts";
 import {IPost, IProduct} from "../../../types";
 import {Post} from "../../Blog/components/Post/Post";



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
        <div className="section section-products">
            <div className="container">
                <h3>Магазин</h3>
                <div className="section-products__filter">
                    <button className="section-products__filter--element"  onClick={() => ArrFilter('all')}>Все</button>
                    <Filter ProdFilter={ArrFilter}/>
                </div>
                <div className=''>
                    <div className='products'>{filtred.map((product: IProduct) => <ProductItem
                        product={product}
                        key={product._id}
                    />)}</div>
                </div>
            </div>
        </div>
    );
};

export default Products;

