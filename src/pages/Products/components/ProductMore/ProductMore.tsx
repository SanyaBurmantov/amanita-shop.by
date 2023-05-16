import {FC} from 'react';
import {IProduct} from "../../../../types";
import './ProductMore.scss'
import {MoreItem} from "./MoreItem/MoreItem";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from "swiper";
import 'swiper/css/navigation';

interface ProductMore {
    product: IProduct
}


const ProductMore: FC<ProductMore> = ({product}) => {


    return (

        <div className='more'>
            <div className='more-top'>
                <h3 className='more-top__title'>{product.moreName}</h3>
                <p className='more-top__text'>{product.text}</p>
            </div>

            <div className='more-center'>
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{clickable: true}}
                    slidesPerView={(window.innerWidth <= 536) ? 1 : (window.innerWidth <= 772 && window.innerWidth > 536) ? 2 : 3}
                    spaceBetween={5}
                    loop>

                    {product.slider?.map((item, index) => (
                        <SwiperSlide key={index}><img src={item.image}/></SwiperSlide>
                    ))}
                </Swiper>

            </div>

            <div className='more-bottom'>
                <h3 className='more-bottom__title'>Полезная информация</h3>
                <hr/>
                {product.more?.map((attr, index) => <MoreItem key={attr.id} item={attr}/>)}
                <div className='bottom-footer'>
                    <p>Республика Беларусь, Минск</p>
                    <p>© 2022 Amanita Shop | Микродозинг | Беларусь</p>
                </div>
            </div>
        </div>
    );
};
export default ProductMore;