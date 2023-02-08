import {useEffect} from "react";

export const useModalOpen = (value: boolean) => {

    useEffect(() => {
        if (value === true) {
            document.body.classList.add('no-scroll')
        }
        if (value === false) {
            document.body.classList.remove('no-scroll')
        }
    }, [value])


    return {
        value
    }
}