import React from "react";
import styles from "./record.module.css";

function Record() {
    return (
        <div className={styles.record}>
            <div className={styles.recordBody}>
                <div className={styles.recordH}>
                    <h3>다다일상 기록</h3>
                    <p>차를 통해 달라지는 일상을 만나보세요.</p>
                </div>
                <div className={styles.recordM}></div>
                <div className={styles.recordF}>
                    <div className={styles.btn}>
                        <button>
                            <span>
                                차와 함께하는 삶 더 보기
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Record;