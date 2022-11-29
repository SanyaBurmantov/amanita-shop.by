import React, {FC} from 'react';
import './Modal.scss'
import {TypeSetState} from "../../types";
import RemoveIco from '../../assets/icons/remove-add.svg'

interface Modal {
    children: any,
    visible: boolean,
    setVisible: TypeSetState<boolean>,
}

export const Modal: FC<Modal> = ({children, visible, setVisible}) => {

    return (
        <div className={visible ? 'modal active' : 'modal'}>
            <div className='modal-content'>
                <div className='modal-content-ico-remove'><img src={RemoveIco} onClick={() => setVisible(false)}/></div>
                <div className='modal-content-content'>{children}</div>
            </div>
        </div>
    );
};

