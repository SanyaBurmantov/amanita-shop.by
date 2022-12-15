import {FC, useState} from 'react';
import {ISlider} from "../../../../types";




interface MoreImages {
    item: ISlider
}

export const MoreImages: FC<MoreImages> = ({item}) => {

    const [visible, setVisible] = useState(null)

    return (
        <>
            <img className={visible ? 'active' : ''} src={item.image} />
        </>
    )
};