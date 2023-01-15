import {FC, useState} from "react";
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import {HeaderDesktop} from "./HeaderDesktop/HeaderDesktop";

interface Header {

}

export const Header: FC<Header> = ({}) => {

    const [currentPage, setCurrentPage] = useState(window.location.pathname)

    return (
        <>
            {(window.innerWidth > 536) && <HeaderDesktop/>}

            {(window.innerWidth <= 536) &&
                <>
                    <HeaderTop setCurrentPage={setCurrentPage}/>
                    <HeaderBottom currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    );
};