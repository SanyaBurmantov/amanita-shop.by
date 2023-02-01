import {FC} from 'react';
import './Modal.scss'
import {TypeSetState} from "../../../types";
import RemoveIco from '../../../assets/icons/UI/remove-add.svg'
import {useModalOpen} from "../../../hooks/useModalOpen";
import {LazyLoadImage} from "react-lazy-load-image-component";

interface Modal {
    children: any,
    visible: boolean,
    setVisible: TypeSetState<boolean>,
}


const Modal: FC<Modal> = ({children, visible, setVisible}) => {

    useModalOpen(visible)

    return (
        <div className={visible ? 'modal active' : 'modal'}>
            <div className='modal-content'>
                <div className='modal-content-ico-remove'><LazyLoadImage src={RemoveIco} onClick={() => setVisible(false)}/></div>
                <div className='modal-content-content'>{children}</div>
            </div>
        </div>
    );
};

export default Modal;

