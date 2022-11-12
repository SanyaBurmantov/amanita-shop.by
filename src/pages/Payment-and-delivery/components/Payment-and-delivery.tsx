import React from "react";
import {motion} from "framer-motion";
import {IRewiews} from "../../../types";
import {ReviewsItem} from "../../Reviews/components/ReviewsItem/ReviewsItem";
import {ReviewsModal} from "../../Reviews/components/ReviewsModal/ReviewsModal";

interface Props {
}

export const PaymentAndDelivery = (props: Props) => {
    return (
        <motion.div className="section section-delivery"
                    initial={{width: "30%"}}
                    animate={{width: "100%"}}
                    exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            <div className='container'>
                <div className='reviews-title'>Оплата и доставка</div>
                <div className='reviews-desc'>
                    <div className='reviews-desc-subtitle'>Писька жопа писька жопа Писька жопа писька жопа Писька жопа
                        писька жопа Писька жопа писька жопа Писька жопа писька жопа

                    </div>

                </div>
            </div>
        </motion.div>
    )
}