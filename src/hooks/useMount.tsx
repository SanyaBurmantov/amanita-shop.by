import {useEffect, useState} from 'react';
import {ANIMATION_MODAL} from "../utils/consts";


export const useMount = ({opened}) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (opened && !mounted) {

            setMounted(true);
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false);
            }, ANIMATION_MODAL);
        }
    }, [opened]);

    return {
        mounted,
    };
};
