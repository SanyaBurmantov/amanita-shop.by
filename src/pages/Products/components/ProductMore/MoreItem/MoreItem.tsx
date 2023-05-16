import {FC, useState} from 'react';
import {IMore} from "../../../../../types";
import './MoreItem.scss'
import Remove from '../../../../../assets/icons/UI/remove-add.svg'
import {AnimatePresence, motion} from "framer-motion";

interface MoreItem {
    item: IMore,
}


export const MoreItem: FC<MoreItem> = ({item}) => {


    const [show, setShow] = useState(false)

    return (

        <div className='more-item'>
            <div className='top'>
                <h4 className={show ? 'top__title active' : 'top__title'}
                    onClick={() => setShow(prev => !prev)}>{item.title}</h4>
                <div className='top__image'><img className={show ? 'active' : ''} src={Remove}
                                                 onClick={() => setShow(prev => !prev)}/></div>
            </div>
            <AnimatePresence>
                {show && <motion.p className='description'
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

