import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { Achievers, AchieversTitle } from "./styles";
import Slider from "react-slick";
import achieversData from "./achiversData";
import styled from "styled-components";
import { mediaMax } from "../../../../shared/style";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  autoplaySpeed: 3000,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default () => (
  <Achievers id="achievers-teamex">
    <AchieversTitle>Our Achievers</AchieversTitle>
    <Container>
      <CustomSlider {...settings}>
        {achieversData.map(({ img, alt = "" }, index) => (
          <div className="px-3">
            <img key={index} src={img} alt={alt} />
          </div>
        ))}
      </CustomSlider>
    </Container>
  </Achievers>
);

const CustomSlider = styled(Slider)`
  margin-bottom: 50px;
  img {
    width: 100%;
  }
  .slick-dots {
    li {
      ${mediaMax.desktop`margin: 0 2px; width:14px;`};
      ${mediaMax.phone`margin: 0 1px; width:12px;`};
      button {
        ${mediaMax.desktop`padding: 0; width:14px;`};
        ${mediaMax.phone` width:12px;`};
      }
    }
  }
`;
