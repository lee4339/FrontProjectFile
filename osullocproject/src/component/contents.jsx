import React from "react";
import styles from "./contents.module.css"
import BestProduct from "./bestProduct";
import Record from "./record";
import Story from "./story";
import Subscription from "./subscription";


function Contents() {
    return (
        <>
            <div className={styles.contentsH}>
                <div className={styles.notice}>
                    <p>공지사항</p>
                    <ul>
                        <li>배열로돌려야함</li>
                    </ul>
                    <button>〉</button>
                </div>     
            </div>
            <div>
                <BestProduct/>
                <Story/>
                <Subscription/>
                <Record/>
            </div>
            <div className={styles.contensF}>
                    <img src="./images/contentsFooterImg.jpg" alt="" />
            </div>
        </>
    )
};

export default Contents;