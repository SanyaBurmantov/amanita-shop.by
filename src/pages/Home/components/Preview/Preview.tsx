import styles from "../Preview/Preview.module.scss"
import background from "../../../../assets/images/Pizda.jpg";
import React from "react";

interface Props {}

export const Preview = (props: Props) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.title}><span>Дары</span> природы</div>
                    <div className={styles.subtitle}>Мухомор сушеный, мухомор красный, пантерный, ежовик гребенчатый, кордицепс и многое другое!</div>
                </div>
            </div>
            <div className={styles.background}>
                <img src={background} alt="Pizda"/>
            </div>
        </section>
    )
}