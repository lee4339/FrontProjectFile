import React from "react";
import styles from "./story.module.css";

function Story() {
    return (
        <div className={styles.story}>
            <div className={styles.storyArea}>
                <div className={styles.box1}>
                    <a href="/">
                        <div className={styles.box1Img}>
                            <img src="/images/storyImg1.jpg" alt="" />
                        </div>
                        <div className={styles.box1Text}>
                            <div className={styles.headText}>
                                <p>오늘만 이 가격</p>
                                <p>콘 00:00:00</p>
                            </div>
                            <div className={styles.footText}>
                                <p>제주 순수녹차</p>
                                <div className={styles.itemInfo}>
                                    <div className={styles.info1}>30%</div>
                                    <div className={styles.info2}>9,500</div>
                                    <div className={styles.info3}>6,650원</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={styles.box2}>
                    <div className={styles.box2H}>
                        <img src="/images/storyImg2.png" alt="" />
                        <div className={styles.textBox}>
                            <p className={styles.boxText1}>9월 출석체크</p>
                            <div className={styles.boxTime}>
                                <p className={styles.boxText2}>09.01 - 09.31</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box2F}>
                        <div>
                            <img src="/images/storyImg3.jpg" alt="" />
                        </div>
                        <div className={styles.storyText}>
                            <p>TEA FROM JEJU</p>
                            <p>오설록 스토리</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Story;