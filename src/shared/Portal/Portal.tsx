import {FC, useEffect, useState} from 'react';
import ReactDOM from "react-dom";

interface Portal{
    children: any
}

const Portal: FC<Portal> = ({children}) => {

    const [container] = useState(() => document.createElement("modal"));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [])

    return ReactDOM.createPortal(children, container);
};

export default Portal;