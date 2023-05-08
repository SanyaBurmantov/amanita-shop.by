import {FC, useEffect, useRef, useState} from 'react';
import {CSSTransition} from "react-transition-group";
import {ANIMATION_MODAL} from "../../../../utils/consts";
import "./Layout.scss";
import animationStyles from "./animation.module.css";

const overlayAnimation = {
    enter: animationStyles.overlayEnter,
    enterActive: animationStyles.overlayEnterActive,
    exit: animationStyles.overlayExit,
    exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
    enter: animationStyles.contentEnter,
    enterActive: animationStyles.contentEnterActive,
    exit: animationStyles.contentExit,
    exitActive: animationStyles.contentExitActive,
};

interface Layout {
    opened: boolean,
    onClose: any,
    children: any
}


const Layout: FC<Layout> = ({onClose, children, opened}) => {

    const overlayRef = useRef();
    const contentRef = useRef();

    const [animationIn, setAnimationIn] = useState(false);

    useEffect(() => {
        setAnimationIn(opened);
    }, [opened]);

    return (
        <div className='container-modal'>
            <CSSTransition
                in={animationIn}
                nodeRef={overlayRef}
                timeout={ANIMATION_MODAL}
                mountOnEnter
                unmountOnExit
                classNames={overlayAnimation}
            >
                <div ref={overlayRef} className='overlay-modal' onClick={onClose}/>
            </CSSTransition>
            <CSSTransition
                in={animationIn}
                nodeRef={contentRef}
                timeout={ANIMATION_MODAL}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div ref={contentRef} className='content-modal'>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};

export default Layout;