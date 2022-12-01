import {useLayoutEffect, useState} from "react";

export const useModalOpen = (modalOpen:boolean) => {

    const [open, setOpen] = useState(modalOpen);

    const doOpen = () => setOpen(prev => !prev)

   // open ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll";

    return { doOpen, modalOpen }
}


