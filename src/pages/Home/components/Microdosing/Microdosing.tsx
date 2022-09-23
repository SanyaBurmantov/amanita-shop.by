import React, {useState} from "react";
import styles from './Microdosing.module.scss'
import {Micro} from "../../../../module";

interface MicroProps {
    item: Micro
}

export const Microdosing = ({item}: MicroProps) => {
    const [subtitle, setSubtitle] = useState(false)
    return (
        <div className={styles.container}>
            <p className={styles.title}>{item.title}</p>
            <button className={styles.button}
            onClick={()=>setSubtitle(prev=>!prev)}>
                {subtitle ? 'Скрыть' : 'Показать'}</button>
            {subtitle && <div>
                <p>{item.subtitle}</p>
            </div>}
        </div>
    )
}