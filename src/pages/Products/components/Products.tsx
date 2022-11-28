import React, {useState} from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductsItem/ProductItem";
import {Filter} from "./Filter/Filter";
import {IProduct} from "../../../types";
import {motion} from "framer-motion";
// @ts-ignore
import Background from "../../../assets/images/background-image-products.png";
import './Products.scss'


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
        <motion.div className="section section-products"
                    initial={{width: "30%"}}
                    animate={{width: "100%"}}
                    exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            <div className="container">
                <h3>Магазин</h3>
                <h4>Мухомор сушеный, мухомор красный, пантерный, ежовик гребенчатый, кордицепс и многое другое!</h4>
                <div className="filter">
                    <div className="section-products__filter">
                        <button className="section-products__filter--element" onClick={() => ArrFilter('all')}>Все
                        </button>
                        <Filter ProdFilter={ArrFilter}/>
                    </div>
                </div>

                <div className=''>
                    <div className='products'>{filtred.map((product: IProduct) => <ProductItem
                        product={product}
                        key={product._id}
                    />)}</div>
                </div>
                <div className='picture'><img src={Background}/></div>
            </div>
        </motion.div>
    );
};

export default Products;

