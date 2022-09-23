import React from "react";

import styles from './Blog.module.scss'

interface Props {
}
export const Blog = (props: Props) => {
    return (
        <div className={styles.blog}>Blog</div>
    )
}