import React from "react";
import { Container, Row, Col } from "reactstrap";
import { scrollToSection } from "../../../../utils";
import bannerTop from "../../../../assets/images/ic_banner_top.png";
import { mediaMax, mediaMin } from "../../../../shared/style";
import styled, { css } from "styled-components";
import SlickSlider from "react-slick";
const bannerSectionImage =
  "https://images.unsplash.com/photo-1483884105135-c06ea81a7a80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 3000
};
const slides = [
  {
    img: "https://teamex.s3.us-east-2.amazonaws.com/berry+juice.png"
  },
  // {
  //   img:
  //     "https://teamex.s3.us-east-2.amazonaws.com/bye+bye+puncture.png"
  // },
  {
    img: "https://teamex.s3.us-east-2.amazonaws.com/liquid.png"
  },
  {
    img: "https://teamex.s3.us-east-2.amazonaws.com/ortho.png"
  },
  {
    img: "https://teamex.s3.us-east-2.amazonaws.com/protien+powder.png"
  },
  {
    img: "https://teamex.s3.us-east-2.amazonaws.com/web.png"
  }
];
export default () => (
  <>
    <Section id="front" name="front">
      <Slider {...settings}>
        {slides.map(({ img }) => (
          <Slide>
            <img src={img} alt="banner" />
          </Slide>
        ))}
      </Slider>

      <div className="btnWrapper">
        {/* <NiceLookingButton onClick={() => scrollToSection("contact-teamex")}>
          Contact Us
        </NiceLookingButton> */}
        <NiceLookingButtonOrange
          class="orange"
          onClick={() => scrollToSection("services")}
        >
          Shop our products
        </NiceLookingButtonOrange>
      </div>

      {/* <Container>
      <Row>
        <Col md={6}> */}
      {/* <Title>
            We provide best product, service and self-fulfillment needs of
            everyone globally
          </Title> */}
      {/* <NiceLookingButton onClick={() => scrollToSection("contact-teamex")}>
            Contact Us
          </NiceLookingButton>
          <NiceLookingButtonOrange
            class="orange"
            onClick={() => scrollToSection("services")}
          >
            Shop our products
          </NiceLookingButtonOrange> */}
      {/* </Col> */}
      {/* <Col md={6} lg={7}>
          <BannerImage src={bannerTop} alt="" />
        </Col> </Row>   </Container>*/}
    </Section>
  </>
);
const btnMobile = css`
  @media (max-width: 575.98px) {
    margin: 2px auto;
    font-size: 12px;
    height: 28px;
    display: block;
    min-width: 128px;
    padding: 0;
  }
`;

const NiceLookingButton = styled("button")`
  background: white;
  border: 1px solid transparent;
  background: rgb(51, 51, 51);
  padding: 5px;
  margin-left: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-family: Oswald;
  color: white;
  text-transform: uppercase;
  min-width: 150px;
  height: 48px;
  transition: 0.2s ease all;

  &:hover {
    border-color: rgb(51, 51, 51);
    background: white;
    color: rgb(51, 51, 51);
  }
  ${btnMobile};
`;

const NiceLookingButtonOrange = styled("button")`
  padding: 5px;
  border: 1px solid transparent;
  margin-left: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-family: Oswald;
  text-transform: uppercase;
  min-width: 150px;
  height: 48px;
  transition: 0.2s ease all;
  background: #ffa600;
  color: black;

  &:hover {
    border-color: #ffa600;
    background: white;
    color: #ffa600;
  }
  ${btnMobile};
`;

const Section = styled("section")`
  width: 100%;
  overflow: hidden;
  background: #000;
  display: flex;
  align-items: center;
  position: relative;
  /* ${mediaMin.desktop`min-height: 500px;`}; */
  /* .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mediaMax.desktop`max-width:100%;`};
  }
  .row {
    align-items: center;
  } */
  .btnWrapper{
    width:fit-content;
    position: absolute;
    bottom: 10%;
    left: 10%;
    
  }
`;

const Slider = styled(SlickSlider)`
  height: 100%;
  background: #fff;

  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    width: fit-content;
    transform: rotate(90deg) translateY(-50%);
    bottom: initial;
    top: 50%;
    transform-origin: 50% 0;
    left: -32px;

    li {
      margin: 0;

      button {
        &::before {
          color: #fff !important;
        }
      }
    }
  }
  .slide {
    background-size: contain !important;
  }
`;
const Slide = styled("div")`
  width: 100%;
  padding-top: 28.64%;
 position:relative;
 /* @media(max-width:575.98px){
  padding-top:0;
  height:300px;
 } */
  img{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  /* background: url(${({ img }) => img}) center / contain no-repeat; */
`;

const Title = styled("h1")`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5;
  font-family: Montserrat;
  color: black;
  background: rgba(255, 255, 255, 0.52);
  padding: 11px 14px;
  border: 1px solid #aeaeae;

  ${mediaMax.desktop`font-size: 28px;`};
  ${mediaMax.tablet`text-align:center;font-size: 26px; max-width:450px; margin-left: auto;margin-right: auto;`};
  ${mediaMax.phone`font-size: 22px;`};
`;
