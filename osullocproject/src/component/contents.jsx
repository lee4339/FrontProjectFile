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
                        <li>공지사항 내용(리스트배열을 통해 애니메이션효과)</li>
                    </ul>
                    <button type="button">〉</button>
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