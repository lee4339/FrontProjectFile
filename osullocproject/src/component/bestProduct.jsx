import React from "react";
import styles from "./bestProduct.module.css";

function BestProduct() {
    return (
        <div className={styles.bestProduct}>
            <div className={styles.bestH}>
                <div className={styles.title}><h3>오늘은 어떤 차를 마셔볼까요?</h3></div>
                <ul className={styles.clickTitle}>
                    <li className={styles.clickBest}>베스트</li>
                    <li className={styles.clickPop}>이번 주 인기 제품</li>
                </ul>
            </div>
            <div className={styles.bestM}></div>
            <div className={styles.bestF}>
                <button type="button" className={styles.more}><span>더 보기 ＞</span></button>
            </div>
        </div>
    )
};

export default BestProduct;