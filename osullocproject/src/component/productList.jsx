import React from "react";
import styles from "./productList.module.css"

function Item({item}) {
    return (
        <div className={styles.itemImg}>
            <img src={item.src} alt={item.maintitle} />
            <h4>{item.maintitle}</h4>
            <p>{item.subtitle}</p>
            <p>{item.price}</p>
            <span>{item.review}</span>
        </div>
    )
}

function ProductList({items}) {
    return (
        <div>
            {items.map(item => (
                <Item item = {item} key = {item.id} />
            ))}
        </div>
    )
};

export default ProductList;