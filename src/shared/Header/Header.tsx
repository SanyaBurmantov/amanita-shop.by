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
            {(window.innerWidth > 587) && <HeaderDesktop/>}

            {(window.innerWidth <= 587) &&
                <>
                    <HeaderTop setCurrentPage={setCurrentPage}/>
                    <HeaderBottom currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                </>
            }
        </>
    );
};