import {ItemMicrodosing} from "./components/ItemMicrodosing";
import {FC} from "react";
import { motion } from "framer-motion";
// @ts-ignore
import remove from '../../assets/icons/UI/remove-add.svg';
import {ItemWhyMicrodos} from "./components/ItemWhyMicrodos";
import {ItemHowMicrodos} from "./components/ItemHowMicrodos";
import {ItemHowMutch} from "./components/itemHowMutch";
import {ItemTimeMicrodos} from "./components/itemTimeMicrodos";
import {ItemHowLong} from "./components/itemHowLong";
import {ItemPiels} from "./components/itemPiels";
import {ItemLegal} from "./components/itemLegal";
import {ItemSwitch} from "./components/itemSwitch";

interface Faq{

}
export const Faq: FC<Faq> = () => {

    return (
        <motion.div className="section section-faq"
                    initial={{width: "30%"}}
                    animate={{width: "100%"}}
                    exit={{x: -window.innerWidth, transition: {duration: 0.3}}}>
            <div className="container">
                <h3>Подробная информация</h3>
                <h4>На этой страничке вы можете подробнее узнать про микродозинг, а так же получить ответы на
                    интересующие вас вопросы.</h4>

                {/*НЕ ПЫТАЙСЯ ЭТО СДЕЛАТЬ В ВИДЕ КОЛЛЕКЦИИ, Я ТАК УЖЕ ОБОСРАЛСЯ*/}

                <div className='faq'>
                    <ItemMicrodosing/>

                    <ItemWhyMicrodos/>

                    <ItemHowMicrodos/>

                    <ItemHowMutch/>

                    <ItemTimeMicrodos/>

                    <ItemHowLong/>

                    <ItemHowLong/>

                    <ItemPiels/>

                    <ItemLegal/>

                    <ItemSwitch/>
                </div>
                <p className='faq__text'>Если у вас остались вопросы - вы всегда можете задать их в телеграм-канале, по телефону или в переписке в месседжерах. </p>
                <button className="btn "><a href="/products">Ясно, покажите асортимент!</a></button>
            </div>


        </motion.div>
    )
}
