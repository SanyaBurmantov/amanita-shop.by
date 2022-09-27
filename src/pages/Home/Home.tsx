import React from "react";
import {Preview} from "./components/Preview/Preview";
import {Microdosing} from "./components/Microdosing/Microdosing";
import styles from "./Home.module.scss"


interface Props {

}


export const Home = () => {

    return (
        <div className={styles.container}>
            <Preview/>
            <Microdosing />
        </div>
    )
}
