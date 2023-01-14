import {FC} from "react";
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import {HeaderDesktop} from "./HeaderDesktop/HeaderDesktop";



interface Header {

}

export const Header: FC<Header> = ({}) => {

    return (
        <>
            {(window.innerWidth > 536) && <HeaderDesktop/>}

            {(window.innerWidth <= 536) &&
                <>
                    <HeaderTop/>
                    <HeaderBottom/>
                </>
            }
        </>
    );
};