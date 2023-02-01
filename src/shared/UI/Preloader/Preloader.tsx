import {FC} from 'react';
import './Preloader.scss'

interface Preloader {

}

const Preloader: FC<Preloader> = () => {
    return (
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
    );
};

export default Preloader;