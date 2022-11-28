import React from "react";
import {motion} from "framer-motion";
// @ts-ignore
import mainpic from '../../assets/page/mainpic.png';
// @ts-ignore
import home_img from '../../assets/page/home_img.png';
// @ts-ignore
import home_img2 from '../../assets/page/home_img2.png';
// @ts-ignore
import home_sleep from '../../assets/images/home_sleep.png';
// @ts-ignore
import home_antistress from '../../assets/images/home_antistress.png';
// @ts-ignore
import home_imun from '../../assets/images/home_imun.png';
// @ts-ignore
import home_detox from '../../assets/images/home_detox.png';
// @ts-ignore
import home_badHabits from '../../assets/images/home_bad-habits.png';
// @ts-ignore
import home_performance from '../../assets/images/home_performance.png';

interface Props {

}


export const Home = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{x: -window.innerWidth, transition: {duration: 0.2}}}>
            <div className="container">
                <div className="back"></div>
                <div className="heading">
                    <div className="heading__picture">
                        <img src={mainpic} alt='picture'/>
                    </div>
                </div>
                <div className="promo">
                    <div className="promo__text">
                        <h1>Дары природы</h1>
                        <p>Польза для здоровья каждый день</p>
                        <div className="promo__button">
                            <button className="btn">Переийти в каталог</button>
                        </div>
                    </div>
                </div>
                <div className="section__join mt-starter">
                    <div className="join">
                        <div className="join__picture">
                            <img src={home_img} alt="pic"/>
                        </div>
                        <div className="join__text">

                            <h3>О микродозинге</h3>


                            <p>Мухоморный микродозинг – это употребление мухомора в малых количествах. Регулярное
                                применение сушеных грибов оказывает положительное физиологическое и
                                психотерапевтическое воздействие. Активные вещества этого лекарственного гриба
                                благотворно влияют на организм и содержат ряд преимуществ для здоровья мозга и
                                тела. </p>
                            <p>При ежедневном приеме увеличивается умственная и физическая активность, становится
                                проще обрабатывать большие объемы информации, сон становится крепким и здоровым,
                                усталость накопленная за многие годы уходит. Также снижается тяга ко вредным
                                привычкам (алкоголь, курение), появляется потребность в здоровой пище, мироощущение
                                становится позитивным. Мухоморный микродозинг не вызывает привыкания и не требует
                                перерыва между курсами.</p>
                            <button className="btn ">Узнать больше</button>
                        </div>

                    </div>

                </div>
                <div className="section__advantages">
                    <div className="advantages">
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_sleep} alt="сон"/>
                            </div>
                            <div className="btn">Нормализует сон</div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_antistress} alt="антистресс"/>
                            </div>
                            <div className="btn">Снимает тревожность</div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_imun} alt="Имунитет"/>
                            </div>
                            <div className="btn">Укрепляет иммунитет</div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_detox} alt="детокс"/>
                            </div>
                            <div className="btn">Выводит токсины</div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_badHabits} alt="антизависиость"/>
                            </div>
                            <div className="btn">Избавляет от зависимостей</div>
                        </div>
                        <div className="advantages__item">
                            <div className="advantages__item--pic">
                                <img src={home_performance} alt="работоспособность"/>
                            </div>
                            <div className="btn">Повышает концентрацию</div>
                        </div>
                    </div>
                </div>

                <div className="section__join">
                    <div className="join">
                        <div className="join__text join-second">
                            <h3>Почему мухомор?</h3>
                            <p>Мусцимол — основное психоактивное вещество мухомора. Обладает успокаивающим эффектом и
                                меняет восприятие. Мусцимол активирует ГАМК рецепторы и успокаивает
                                нейронную активность. Вы будете мыслить яснее. Так же мусцимол влияет на выработку
                                гормонов дофамина, норадреналина и серотонина. Это выражается в приподнятом настроении,
                                появляется уверенность и смелость, снимается тревожный эффект.</p>
                            <p>У нас вы можете купить мухомор высочайшего качества. Все грибы проходят ферментацию </p>
                            <button className="btn ">Узнать больше</button>
                        </div>
                        <div className="join__picture">
                            <img src={home_img2} alt="pic"/>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}
