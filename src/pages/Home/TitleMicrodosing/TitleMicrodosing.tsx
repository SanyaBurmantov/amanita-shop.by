import {FC} from 'react';
import './TitleMicrodosing.scss'
import Image1 from '../../../assets/images/HomeMicrodosing/1.png'
import Image2 from '../../../assets/images/HomeMicrodosing/2.png'
import Image3 from '../../../assets/images/HomeMicrodosing/3.png'
import Image4 from '../../../assets/images/HomeMicrodosing/4.png'
import Image5 from '../../../assets/images/HomeMicrodosing/5.png'

interface TitleMicrodosing {

}


const TitleMicrodosing: FC<TitleMicrodosing> = () => {



    window.addEventListener('load', function() {

        const image_one = document.querySelector(".image-one");
        const image_two = document.querySelector(".image-two");
        const image_three = document.querySelector(".image-three");
        const image_four = document.querySelector(".image-four");
        const image_five = document.querySelector(".image-five");


        setTimeout(() => {
            image_one.classList.add("visible");
        }, 200);

        setTimeout(() => {
            image_two.classList.add("visible");
        }, 400);

        setTimeout(() => {
            image_three.classList.add("visible");
        }, 600);

        setTimeout(() => {
            image_four.classList.add("visible");
        }, 800);

        setTimeout(() => {
            image_five.classList.add("visible");
        }, 1000);


    });



    return (


<div className='info-container'>
    <div className='info'>
        <h3>О микродозинге</h3>
        <p>Мухоморный микродозинг – это употребление мухомора в малых количествах. Регулярное применение сушеных
            грибов оказывает положительное физиологическое и психотерапевтическое воздействие. Активные
            вещества этого лекарственного гриба благотворно влияют на организм и содержат ряд преимуществ
            для здоровья мозга и тела.</p>
        <p>При ежедневном приеме увеличивается умственная и физическая активность, становится проще обрабатывать
            большие объемы информации, сон становится крепким и здоровым, усталость накопленная за многие
            годы уходит. Также снижается тяга ко вредным привычкам (алкоголь, курение), появляется
            потребность в здоровой пище, мироощущение становится позитивным. Мухоморный микродозинг не
            вызывает привыкания и не требует перерыва между курсами.</p>
    </div>


    <img className='image-one' src={Image1}/>
    <img className='image-two' src={Image2}/>
    <img className='image-three' src={Image3}/>
    <img className='image-four' src={Image4}/>
    <img className='image-five' src={Image5}/>

</div>


    );
};

export default TitleMicrodosing;