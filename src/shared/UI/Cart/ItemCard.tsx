import {FC} from 'react';
import {FunctionRemoveHandler, ICartItem} from "../../../types";
import './ItemCard.scss'
import RemoveIco from '../../../assets/icons/UI/remove-add.svg'
import {LazyLoadImage} from "react-lazy-load-image-component";

interface ItemCard {
    item: ICartItem,
    removeHandler: FunctionRemoveHandler,
}

export const ItemCard: FC<ItemCard> = ({item, removeHandler}) => {
    return (
        <div className='item' key={item.name}>
            <div className='item-image'><LazyLoadImage src={item.imagePath} alt={item.name}/></div>
            <div className='item-content'>
                <div className='item-content-top'>
                    <div className='item-content-top-title'>
                        <div className='item-content-top-title-name'>{item.name}</div>
                        <div className='item-content-top-title-type'>{item.type}</div>
                    </div>
                    <div className='item-content-top-ico' onClick={() => removeHandler(item.id)}><img src={RemoveIco}/>
                    </div>
                </div>
                <div className='item-content-bottom'>
                    {item.form !=3 && <div className='item-content-bottom-description'>{item.productDescription.title} {item.countFormOne}</div>}
                    {item.form !=1 && <div className='item-content-bottom-description'>{item.productDescription.subtitle} {item.countFormTwo}</div>}
                    <div className='item-content-bottom-description'>Количество единиц товара: {item.count}</div>
                    <div className='item-content-bottom-price'>Итого: {item.finalPrice} BYN</div>
                </div>
            </div>
        </div>
    );
};


