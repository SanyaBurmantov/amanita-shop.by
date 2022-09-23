import React from "react";

import styles from './Payment-and-delivery.module.scss'

interface Props {
}
export const PaymentAndDelivery = (props: Props) => {
    return (
        <div className={styles.payment}>Payment and delivery</div>
    )
}