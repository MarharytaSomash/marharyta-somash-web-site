import { FC } from "react";
import styles from "../styles/ScrollDown.module.scss";

const ScrollDown: FC = () => {
    return (
        <>
            <div className={styles.scroll_down}>
                <span>scroll down</span>
            </div>
            <div className={styles.scroll_down_scroll_down__left}>
                <span>scroll down</span>
            </div>
        </>
    );
};

export default ScrollDown;
