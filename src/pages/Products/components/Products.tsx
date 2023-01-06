import {FC, useState} from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductsItem/ProductItem";
import {Filter} from "./Filter/Filter";
import {IProduct} from "../../../types";
import {motion} from "framer-motion";
import './Products.scss'


interface Products {
}

export const Products: FC<Products> = () => {

    const [filter, setFilter] = useState(products)

    const updateFilter = (attr: IProduct[]) => {
        setFilter(attr)
    }

    return (
        <motion.div
            className="section section-products"
            initial={{width: "30%"}}
            animate={{width: "100%"}}
            exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            <div className="container">
                <h3>Магазин</h3>
                <h4>Мухомор сушеный, мухомор красный, пантерный, ежовик гребенчатый, кордицепс и многое другое!</h4>
                <div className="filter">
                    <div className="section-products__filter">
                        <Filter updateFilter={updateFilter} setFilter={setFilter}/>
                    </div>
                </div>

                <div className=''>
                    <div className='products'>{filter.map((product: IProduct, index) =>
                        <ProductItem
                            index={index}
                            product={product}
                            key={product._id}
                        />)}</div>
                </div>
            </div>

           </motion.div>

    );
};
