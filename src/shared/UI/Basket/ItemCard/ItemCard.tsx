import {FC} from 'react';
import {ICartItem} from "../../../../types";
import './ItemCard.scss';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {removeFromCart} from "../../../../store/cart/actions";
import {useDispatch} from "react-redux";


interface ItemCard {
    item: ICartItem,
}

export const ItemCard: FC<ItemCard> = ({item}) => {

    const dispatch = useDispatch()

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }


    return (


        <div className='card-item'>

            <div className='item-left'>
                <div className='item-left__image'><LazyLoadImage src={item.imagePath}/></div>
                <span onClick={() => removeHandler(item.id)}>Удалить товар</span>
            </div>


            <div className='item-right'>

                <div className='item-title'>
                    <span className='item-title__text'>{item.name}</span>
                    <span className='item-title__type'>{item.type}</span>
                </div>

                <div className='item-subtitle'>{item.subtitle}</div>

                <div className='item-description'>
                    <div className='item-description__text'>
                        {item.form != 3 && <><span>{item.productDescription.title}</span> {item.countFormOne}</>}
                    </div>
                    <div className='item-description__text'>
                        {item.form != 1 && <><span>{item.productDescription.subtitle}</span> {item.countFormTwo}</>}
                    </div>
                    <div className='item-description__text'>
                        <span>Количество единиц товара:</span> {item.count}
                    </div>
                </div>


                <div className='item-final'>
                    <span className='item-final__text'>Итого</span>
                    <span className='item-final__count'>{item.finalPrice} BYN</span>
                </div>
            </div>

        </div>
    );
};


