import React, {FC} from 'react';
import {FunctionRemoveHandler, ICartItem} from "../../types";
import './ItemCard.scss'
// @ts-ignore
import RemoveIco from '../../assets/icons/remove-add.svg'

interface ItemCard {
    item: ICartItem,
    removeHandler: FunctionRemoveHandler,
}

export const ItemCard: FC<ItemCard> = ({item, removeHandler}) => {
    return (
        <div className='item' key={item.name}>
            <div className='item-image'><img src={item.imagePath} alt={item.name}/></div>
            <div className='item-content'>
                <div className='item-content-top'>
                    <div className='item-content-top-title'>
                        <div className='item-content-top-title-name'>{item.name}</div>
                        <div className='item-content-top-title-type'>{item.type}</div>
                    </div>
                    <div className='item-content-top-ico' onClick={() => removeHandler(item._id)}><img src={RemoveIco}/>
                    </div>
                </div>
                {/*<div className='item-content-center'>{item.title}</div>*/}
                <div className='item-content-bottom'>
                    {/*<div className='item-content-bottom-title'>Описание товара:</div>*/}
                    {/*<div className='item-content-bottom-type'>{item.type}</div>*/}
                    <div
                        className='item-content-bottom-description'>{(item.form === 1) ? 'Количество грамм порошка:' : (item.form === 2) ? 'Количество капсул:' : (item.form === 3) ? 'Количество капсул:' : (item.form === 4) ? 'Количество пакетиков:' : (item.form === 5) ? 'Количество грамм:' : 'Объем:'} {`${item.oneSelector}`}</div>
                    <div
                        className='item-content-bottom-description'>{(item.form === 2) ? 'Количество грамм в капсуле:' : (item.form === 4) ? 'Количество грамм:' : ''} {((item.form === 2) || (item.form === 4)) ? `${item.twoSelector}` : ''}</div>
                    <div className='item-content-bottom-description'>Количество единиц
                        товара: {`${item.pizda}`}</div>
                    <div className='item-content-bottom-price'>Итого: {`${item.count} BYN`}</div>
                </div>
            </div>
        </div>
    );
};


