import {FC} from "react";
import TitleMicrodosing from "./TitleMicrodosing/TitleMicrodosing";
import BeneficialFeatures from "./BeneficialFeatures/BeneficialFeatures";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import FAQ from "./FAQ/FAQ";
import './Home.scss'
import {Link} from "react-router-dom";


interface Home {

}


export const Home: FC<Home> = ({}) => {
    return (

        <>
            <div className="container">
                <div className='home-title'>
                    <h3 className='home-title__title'>Дары природы</h3>
                    <h4 className='home-title__subtitle'>Польза для здоровья каждый день</h4>
                    <div className="wrapper-info">
                        <h4 className='wrapper-info__text'>Внимание</h4>
                        <h4 className='wrapper-info__text'>Продажа мухоморов теперь запрещена на территории Республики Беларусь.</h4>
                        <h4 className='wrapper-info__text'>Но не расстраивайтесь, альтернативы можно рассмотреть на сайте нашего поставщика</h4>
                        <a className='wrapper-info__link' href="https://altay-baykal.by">https://altay-baykal.by</a>
                    </div>


                    <button className="home-title__button "><Link to='/products'>Посмотреть каталог</Link></button>
                </div>

            <TitleMicrodosing/>

            <BeneficialFeatures/>

            <WhyChooseUs/>

            <FAQ/>
            </div>
        </>

    )
}
// <div className="heading">
//     <div className="container container--promo">
//         <div className="promo">
//             <div className="promo__text">
//                 <h1>Дары природы</h1>
//                 <p>Польза для здоровья каждый день</p>
//             </div>
//             <div className="promo__button">
//                 <button className="btn"><a href="/products">Посмотреть каталог</a></button>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="container">
//
//     <div className="section__join">
//         <div className="join">
//             <div className="join__picture">
//                 <LazyLoadImage src={home_img} alt="pic"/>
//             </div>
//             <div className="join__text">
//
//                 <h3>О микродозинге</h3>
//
//
//                 <p>Мухоморный микродозинг – это употребление мухомора в малых количествах. Регулярное
//                     применение сушеных грибов оказывает положительное физиологическое и
//                     психотерапевтическое воздействие. Активные вещества этого лекарственного гриба
//                     благотворно влияют на организм и содержат ряд преимуществ для здоровья мозга и
//                     тела. </p>
//                 <p>При ежедневном приеме увеличивается умственная и физическая активность, становится
//                     проще обрабатывать большие объемы информации, сон становится крепким и здоровым,
//                     усталость накопленная за многие годы уходит. Также снижается тяга ко вредным
//                     привычкам (алкоголь, курение), появляется потребность в здоровой пище, мироощущение
//                     становится позитивным. Мухоморный микродозинг не вызывает привыкания и не требует
//                     перерыва между курсами.</p>
//                 <button className="btn"><a href="/faq">Интересно. А подробнее?</a></button>
//             </div>
//
//         </div>
//
//     </div>
//     <div className="section__advantages">
//         <div className="advantages">
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_sleep} alt="сон"/>
//                 </div>
//                 <div className="btn">Нормализует сон</div>
//             </div>
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_antistress} alt="антистресс"/>
//                 </div>
//                 <div className="btn">Снимает тревожность</div>
//             </div>
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_imun} alt="Имунитет"/>
//                 </div>
//                 <div className="btn">Укрепляет иммунитет</div>
//             </div>
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_detox} alt="детокс"/>
//                 </div>
//                 <div className="btn">Выводит токсины</div>
//             </div>
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_badHabits} alt="антизависиость"/>
//                 </div>
//                 <div className="btn">Избавляет от зависимостей</div>
//             </div>
//             <div className="advantages__item">
//                 <div className="advantages__item--pic">
//                     <LazyLoadImage src={home_performance} alt="работоспособность"/>
//                 </div>
//                 <div className="btn">Повышает концентрацию</div>
//             </div>
//         </div>
//     </div>
//
//     <div className="section__join">
//         <div className="join">
//             <div className="join__text join-second">
//                 <h3>Почему выбирают нас?</h3>
//                 <p>В нашем каталоге есть грибы в разной расфасовке, благодаря чему вы можете подобрать тот
//                     вариант, который отвечает вашим целям. Мы гарантируем качество грибов. Сырье собрано в
//                     экологически чистых местах, перед сушкой прошло предварительный отбор. В сушку попадают
//                     только зрелые плодовые тела. Сушат плодовые тела при температуре не выше 40 градусов.
//                     Такая технология позволяет сохранить все полезные вещества, витамины и микроэлементы,
//                     которые содержит в себе шляпка мухомора.</p>
//                 <p>Каждый день мы упорно работаем, над тем, чтобы сделать жизнь наших клиентов лучше и счастливее.</p>
//                 <p>Наш опыт работы с грибами позволяет отбирать для вас только лучшее.</p>
//                 <button className="btn "><a href="/products">Ясно, покажите асортимент!</a></button>
//             </div>
//             <div className="join__picture">
//                 <LazyLoadImage src={home_img2} alt="pic"/>
//             </div>
//         </div>
//     </div>
// </div>

//
// <>
//     //     <div className="back"></div>
//     //
//     //
//     // </>