import React from "react";
import ProductList from "./component/productList";
import styles from "./component/productList.module.css"

function Product() {
    const items = [    
        {
            id: 1,
            src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
            maintitle: '설화수1',
            subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
            price: '15000 만원',
            review:'★★★'
        },
        {
          id: 2,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수2',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 3,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수3',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 4,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수4',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 5,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수5',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 6,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수6',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 7,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수7',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 8,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수8',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 9,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수9',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 10,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수10',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 11,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수11',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        },
        {
          id: 12,
          src:'https://images-kr.amoremall.com/products/111170000339/111170000339_00.png?1647844696293',
          maintitle: '설화수12',
          subtitle: 'NEW 윤조에센스 120ml 대용량 리미티드 에디션',
          price: '15000 만원',
          review:'★★★'
        }
      
      ];

    return (
        <div className={styles.itemList}>
            <ProductList items={items}/>
        </div>
    )
}

export default Product;