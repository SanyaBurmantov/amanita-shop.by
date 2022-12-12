import React, {FC, useState} from 'react';
import {IMore} from "../../../../types";
import Remove from '../../../../assets/icons/remove-add.svg'
import {AnimatePresence, motion} from "framer-motion";

interface MoreItem {
    item: IMore
}


export const MoreItem: FC<MoreItem> = ({item}) => {


    const [show, setShow] = useState(false)

    return (
        <div className='more-bottom__item'>
            <h3 className={show ? 'more-bottom__item-title active' : 'more-bottom__item-title'}>
                <div className='more-bottom__item-title-text'>{item.title}</div>
                <img  className={show ? 'active' : ''}src={Remove} onClick={() => setShow(prev => !prev)}/>
            </h3>
            <AnimatePresence>
                {show && <motion.p
                    className='more-bottom__item-subtitle'
                    key={item.id}
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.1}}
                    style={{overflow: 'hidden'}}
                >{item.subtitle}</motion.p>}
            </AnimatePresence>
            <hr/>
        </div>

    );
};

