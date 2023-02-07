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


        <div className='card-item'>


            <div className='card-item-top'>
                <div className='card_image'><LazyLoadImage src={item.imagePath}/></div>
                <div className='card-ico_remove'><LazyLoadImage src={RemoveIco} onClick={() => removeHandler(item.id)}/>
                </div>

            </div>

            <div className='card-item-bottom'>
                <div className='card-title'>
                    <span className='card-title'>{item.name}</span>
                    <span className='card-type'>{item.type}</span>
                </div>


                <div className='card-description'>
                    <div className='card-description__item'>
                        {item.form != 3 && <><span>{item.productDescription.title}</span> {item.countFormOne}</>}
                    </div>
                    <div className='card-description__item'>
                        {item.form != 1 && <><span>{item.productDescription.subtitle}</span> {item.countFormTwo}</>}
                    </div>
                    <div className='card-description__item'>
                        <span>Количество единиц товара:</span> {item.count}
                    </div>
                </div>
                <div className='card-price'>
                    <span>Итого</span>
                    <span>{item.finalPrice} BYN</span>
                </div>


            </div>
        </div>
    );
};


