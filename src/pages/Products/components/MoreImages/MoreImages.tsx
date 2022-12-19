import {FC} from 'react';
import {ISlider} from "../../../../types";

interface MoreImages {
    item: ISlider
}

export const MoreImages: FC<MoreImages> = ({item}) => {



    return (
        <>
            <img src={item.image}/>
        </>
    )
};