import {FC} from 'react';
import Portal from "../../Portal/Portal";
import {useMount} from "../../../hooks/useMount";
import Layout from "./Layout/Layout";
import {useModalOpen} from "../../../hooks/useModalOpen";
import {LazyLoadImage} from "react-lazy-load-image-component";
import RemoveIco from '../../../assets/icons/UI/remove-add.svg';
import {TypeSetState} from "../../../types";
import './Layout/Layout.scss'


interface Modal {
    opened: boolean,
    onClose: any,
    children: any,
    setOpened: TypeSetState<boolean>
}

export const Modal: FC<Modal> = ({opened, children, onClose, setOpened}) => {

    useModalOpen(opened);

    const {mounted} = useMount({opened})


    if (!mounted) {
        return null;
    }


    return (
        <Portal>
            <Layout onClose={onClose} opened={opened}>
                <div className='modal-ico-remove'><LazyLoadImage src={RemoveIco} onClick={() => {
                    setOpened(false);
                }}/></div>
                {children}
            </Layout>
        </Portal>
    );
};