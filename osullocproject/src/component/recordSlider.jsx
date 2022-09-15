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
  margin-top: 40px;
  margin-bottom: -40px;
  width: 1200px;

  .slick-list {
    position: absolute;
    width: 1200px;
    height: 315.75px;
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
    border-radius: 50%;
    cursor: pointer;
  }

  .slick-prev {
    position: absolute;
    top: -5px;
    left: -65px;
    cursor: pointer;
    z-index: 100;
  }

  .slick-next {
    position: absolute;
    top: -5px;
    left: 1174px;
    cursor: pointer;
  }
`;

const ImgBox = styled.img`
    width: 386.66px;
    height: 248.56px;
`;

const TextBox = styled.div`
    margin-top: 18px;
    width: 386.66px;
    height: 49.19px;
`;

const Text01 = styled.p`
    margin : 0px;
    font-size: 18px;
    font-weight: 700;
    color: #333333;
`;

const Text02 = styled.p`
    margin : 5px 0px 0px 0px;
    font-size: 13px;
    color: #666666;
`;

export default class RecordSlider extends Component {
    render () {

        const settings = {
            dots: false,
            infinite: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // variableWidth: true
        }
    return (
        <Styleddiv>
            <StyledSlide {...settings}>
                <div style={{width: '406.667px'}}>
                    <ImgBox src="/images/magazine_img01.jpg"/>
                    <TextBox>
                        <Text01>차가운 것으로 따뜻한 것을 만들다</Text01>
                        <Text02>철제 가구 디자이너 양윤선의 티라이프</Text02>
                    </TextBox>
                </div>
                <div style={{width: '406.667px'}}>
                    <ImgBox src="/images/magazine_img02.jpg"/>
                    <TextBox>
                        <Text01>차가운 것으로 따뜻한 것을 만들다</Text01>
                        <Text02>철제 가구 디자이너 양윤선의 티라이프</Text02>
                    </TextBox>
                </div>
                <div style={{width: '406.667px'}}>
                    <ImgBox src="/images/magazine_img03.jpg"/>
                    <TextBox>
                        <Text01>차가운 것으로 따뜻한 것을 만들다</Text01>
                        <Text02>철제 가구 디자이너 양윤선의 티라이프</Text02>
                    </TextBox>
                </div>
                <div style={{width: '406.667px'}}>
                    <ImgBox src="/images/magazine_img04.jpg"/>
                    <TextBox>
                        <Text01>차가운 것으로 따뜻한 것을 만들다</Text01>
                        <Text02>철제 가구 디자이너 양윤선의 티라이프</Text02>
                    </TextBox>
                </div>
                <div style={{width: '406.667px'}}>
                    <ImgBox src="/images/magazine_img05.jpg"/>
                    <TextBox>
                        <Text01>차가운 것으로 따뜻한 것을 만들다</Text01>
                        <Text02>철제 가구 디자이너 양윤선의 티라이프</Text02>
                    </TextBox>
                </div>
            </StyledSlide>
        </Styleddiv>
    )
    }
}