import {FC} from "react";
import {motion} from "framer-motion";
import './Payment-and-delivery.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {PaymentItem} from "./components/PaymentItem/PaymentItem";
import Image1 from '../../assets/Payment/1.png'
import Image2 from '../../assets/Payment/2.png'
import Image3 from '../../assets/Payment/3.png'
import 'swiper/css/pagination';
import {Pagination} from "swiper";

interface PaymentAndDelivery {

}

export const PaymentAndDelivery: FC<PaymentAndDelivery> = () => {

    const payment = [
        {
            id: 0,
            image: Image1,
            location: "Доставка по Минску",
            subtitle: 'До подъезда',
            delivery: '5 BYN',
            payment: 'Наличными курьеру'
        }, {
            id: 1,
            image: Image2,
            location: "Доставка по Беларуси",
            subtitle: 'Отправка "Белпочта" или "Европочта" наложенным платёжом',
            delivery: '5-6 BYN',
            payment: 'На почте при получении'
        }, {
            id: 2,
            image: Image3,
            location: "Доставка по всему миру",
            subtitle: 'По предоплате',
            delivery: 'Договорная',
            payment: 'На почте при получении'
        }
    ]

    return (

//
//
//         <motion.div className="section section-delivery"
//                     initial={{width: "30%"}}
//                     animate={{width: "100%"}}
//                     exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
//
//
 <div className="section section-delivery">
    <div className='container'>
        <h3>Оплата и доставка</h3>
       <h4>Здесь вы можете получить акутальную информацию по возможности доставки.</h4>

      <Swiper
            modules={[Pagination]}
            loop={(window.innerWidth <= 767) ? true : false}
            pagination={{clickable: true}}
            slidesPerView={(window.innerWidth <= 767) ? 1 : 3}
            spaceBetween={(window.innerWidth <= 767) ? 0 : 20}>
            {payment.map((item, index) => (
                <div key={item.id}>
                    <SwiperSlide><PaymentItem item={item}/></SwiperSlide>
                </div>
            ))}
        </Swiper>
    </div>
</div>
//
//
//         </motion.div>
    )
}

