import React, {FC} from 'react';
import './Modal.scss'
import {TypeSetState} from "../../types";
// @ts-ignore
import RemoveIco from '../../assets/icons/remove-add.svg'
import {useModalOpen} from "../../hooks/useModalOpen";

interface Modal {
    children: any,
    visible: boolean,
    setVisible: TypeSetState<boolean>,
}


export const Modal: FC<Modal> = ({children, visible, setVisible}) => {

    let { doOpen } = useModalOpen(false)
    return (
        <div className={visible ? 'modal active' : 'modal'}>
            <div className='modal-content'>
                <div className='modal-content-ico-remove'><img src={RemoveIco} onClick={() => ( doOpen(), setVisible(false))}/></div>
                <div className='modal-content-content'>{children}</div>
            </div>
        </div>
    );
};

