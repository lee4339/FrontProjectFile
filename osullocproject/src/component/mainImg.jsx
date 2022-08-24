import React from "react";
import styles from './mainImg.module.css';
import Carousel from 'react-bootstrap/Carousel';

function MainImg() {
  return (
    <Carousel className={styles.mainImg} variant="dark">
      <Carousel.Item interval={3800}>
        <img
          className="d-block w-100"
          src="./images/mainImg1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>1번째</h3>
          <p>슬라이드</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3800}>
        <img
          className="d-block w-100"
          src="./images/mainImg2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>2번째</h3>
          <p>슬라이드</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3800}>
        <img
          className="d-block w-100"
          src="./images/mainImg3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>3번째</h3>
          <p>슬라이드</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3800}>
        <img
          className="d-block w-100"
          src="./images/mainImg4.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>4번째</h3>
          <p>슬라이드</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src="./images/mainImg5.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>5번째</h3>
          <p>슬라이드</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainImg;
