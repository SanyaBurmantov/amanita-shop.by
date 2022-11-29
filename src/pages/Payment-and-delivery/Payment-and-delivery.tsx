import React, {FC, useEffect, useLayoutEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import './Payment-and-delivery.scss';
import {PaymentItem} from "./components/PaymentItem/PaymentItem";
import Arrows from '../../assets/icons/Slider-arrows.svg'
import {Background} from "../../shared/Background/Background";


interface PaymentAndDelivery {

}

export const PaymentAndDelivery: FC<PaymentAndDelivery> = () => {

    const [offset, setOffset] = useState(0)
    const [width, setWidth] = useState(0)
    const sliderRef = useRef()

    const payment = [
        {
            id: 0,
            image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
            location: "Доставка по Минску",
            subtitle: 'До подъезда',
            delivery: '5 BYN',
            payment: 'Наличными курьеру'
        }, {
            id: 1,
            image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
            location: "Доставка по Беларуси",
            subtitle: 'Отправка "Белпочта" или "Европочта" наложенным платёжом',
            delivery: '5-6 BYN',
            payment: 'На почте при получении'
        }, {
            id: 2,
            image: 'https://sun9-20.userapi.com/impg/GDgkfybsGkLGmd7WDhXzDji7JEsUBc-LrXs9Tg/-mfuEEtPHmY.jpg?size=1536x2048&quality=96&sign=a0fd2c6eab669f914576fd72926391f8&type=album',
            location: "Доставка по всему миру",
            subtitle: 'По предоплате',
            delivery: 'Договорная',
            payment: 'На почте при получении'
        }
    ]

    useEffect(()=>{

        const resizeHandler = () => {
            // @ts-ignore
            const  _width = sliderRef.current.offsetWidth;
            setWidth(_width)
            console.dir(_width)
        }
        resizeHandler();
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
        }

    },[])

    const nextSlide = () => {
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - width;
            const maxOffset = -(width * (payment.length-1))
            return Math.max(newOffset, maxOffset)
        })
    }

    const prewSlide = () => {
        setOffset((currentOffset)=>{
            const newOffset = currentOffset + width;
            return Math.min(newOffset, 0);
        })
    }


    return (

        <motion.div className="section section-delivery"
                    initial={{width: "30%"}}
                    animate={{width: "100%"}}
                    exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            <div className='container'>
                <h3>Оплата и доставка</h3>
                <div className='slider'>
                    <div className='slider-arrows-left'><img src={Arrows} onClick={prewSlide}/></div>
                    <div ref={sliderRef} className='slider-container'>
                        <div className='payment-cards' style={{transform: `translateX(${offset}px)`}}>{payment.map((item) => <PaymentItem item={item} key={item.id}/>)}</div>
                    </div>
                    <div className='slider-arrows-right'><img src={Arrows} onClick={nextSlide}/></div>
                </div>
            </div>
        </motion.div>
    )
}