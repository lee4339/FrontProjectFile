import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Styleddiv = styled.div`
    width: 1200px;
    height: 398px;
`;

const StyledSlide = styled(Slider)`
  position: relative;
  margin-top: 30px;
  margin-bottom: -40px;
  width: 100%;

  .slick-list {
    position: absolute;
    width: 1200px;
    height: 370px;
    margin: 0 auto;
    overflow: hidden;
    top: 30px;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    display: none !important;
}

.slick-arrow {
    transform: translate(30px, 150px);
    background-color: #515151;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: 30px;
    left: -65px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: 30px;
    left: 1174px;
    cursor: pointer;
  }
`;

export default class ItemSlider extends Component {
    render () {

        const settings = {
            dots: true,
            infinite: true,
            speed: 100,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            centerPadding: '0px'
        }
    return (
        <Styleddiv>
            <StyledSlide {...settings}>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest.png"/>1
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest2.png"/>2
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest.png"/>3
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest2.png"/>4
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest.png"/>5
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest2.png"/>6
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest.png"/>7
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest2.png"/>8
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest.png"/>9
                </div>
                <div style={{width: '240px',height: '250.13px'}}>
                  <img src="images/allproducttest2.png"/>10
                </div>
            </StyledSlide>
        </Styleddiv>
    )
    }
}