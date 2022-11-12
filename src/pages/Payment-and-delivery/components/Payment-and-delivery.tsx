import React from "react";
import {motion} from "framer-motion";

interface Props {
}
export const PaymentAndDelivery = (props: Props) => {
    return (
        <motion.div
            initial={{width: "30%"}}
            animate={{width: "100%"}}
            exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            Payment and delivery
        </motion.div>
    )
}