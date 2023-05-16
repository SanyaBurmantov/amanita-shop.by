import {FC} from 'react';
import './Preloader.scss'
import Portal from "../../Portal/Portal";


interface Preloader {

}

const Preloader: FC<Preloader> = () => {




    return (


        <Portal>

            <div className='container-preloader'>

                <div className='overlay-preloader'></div>
                <div className="preloader">
                    <div className="preloader-items">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>




        </Portal>

    );
};

export default Preloader;