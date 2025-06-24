import {FC, useState} from 'react';
import {products} from "../../../data/Products"
import ProductItem from "./ProductsItem/ProductItem";
import {Filter} from "./Filter/Filter";
import {IProduct} from "../../../types";
import './Products.scss'
import bgIcoProduct from '../../../assets/Background/Image-products.png'

interface Products {
}

export const Products: FC<Products> = () => {

    const [filter, setFilter] = useState(products)

    const updateFilter = (attr: IProduct[]) => {
        setFilter(attr)
    }


    return (
        <div className='section section-products'>
            <div className="wrapper-info wrapper-info--shop">
                <h4 className='wrapper-info__text'>Внимание</h4>
                <h4 className='wrapper-info__text'>Продажа мухоморов теперь запрещена на территории Республики Беларусь.</h4>
                <h4 className='wrapper-info__text'>Но не расстраивайтесь, альтернативы можно рассмотреть на сайте нашего поставщика</h4>
                <a className='wrapper-info__link' href="https://altay-baykal.by">https://altay-baykal.by</a>
            </div>
            <div className="container">
                <h3 className='products-title'>Магазин</h3>
                <h4 className='products-subtitle'>Мухомор сушеный, мухомор красный, пантерный, ежовик гребенчатый,
                    кордицепс и многое другое!</h4>

                <Filter updateFilter={updateFilter} setFilter={setFilter}/>

                <div className='products'>
                    {filter.map((product: IProduct, index) =>
                        <ProductItem product={product} index={index} key={product.id}/>
                    )}
                </div>
            </div>
            {(window.innerWidth < 767) && <div className='products-ico-image'><img src={bgIcoProduct}/></div>}
        </div>
    );
};
