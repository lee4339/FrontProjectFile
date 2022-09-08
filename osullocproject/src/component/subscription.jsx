import React from "react";
import styles from "./subscription.module.css";

function Subscription() {
    return (
        <div className={styles.subscription}>
            <div className={styles.subH}>
                <div className={styles.head}>
                    <h3>다다일상 구독</h3>
                    <p>하루 한 번,나를 만나는 시간을 가져보세요.</p>
                </div>
            </div>
            <div className={styles.subM}>
                <div className={styles.main}>
                    <div className={styles.contents}>
                        <div>
                            <img src="/images/subcriptionImg1.jpg" alt="" />
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.contents}>
                        <div>
                            <img src="/images/subcriptionImg2.jpg" alt="" />
                        </div>
                        <div></div>
                    </div>
                    <div className={styles.contents}>
                        <div>
                            <img src="/images/subcriptionImg3.jpg" alt="" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.subF}>
                <div className={styles.btn}>
                    <button type="button">
                        <span>다다일상 자세히 보기</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Subscription;