import React from "react";
import styles from "./contents.module.css"
import BestProduct from "./bestProduct";
import Record from "./record";
import Story from "./story";
import Subcription from "./subscription";


function Contents() {
    return (
        <>
            <div className={styles.contentsH}>
                <div className={styles.notice}>
                    <p>공지사항</p>
                    <ul>
                        <li>공지사항 내용입니다.</li>
                    </ul>
                    <button>〉</button>
                </div>     
            </div>
            <div>
                <BestProduct/>
                <Story/>
                <Subcription/>
                <Record/>
            </div>
            <div className={styles.contensF}>
                <div className={styles.imgbox}>
                    이미지 삽입
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
};

export default Contents;