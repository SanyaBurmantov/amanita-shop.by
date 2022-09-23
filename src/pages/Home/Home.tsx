import React from "react";
import {Microdosing} from "./components/Microdosing/Microdosing";
import {micro} from "./data/Microdosing"
import {Preview} from "./components/Preview/Preview";


interface Props {}
    export const Home = (props: Props) => {
        return (
            <>
                <Preview />
                {micro.map(item => <Microdosing item={item} />)}
            </>
        )
}


