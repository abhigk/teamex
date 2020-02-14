import React from "react";
import noImg from "../../../../assets/images/noImage.jpg";
import { Container, Row, Col } from "reactstrap";
import { fade } from "../../../../shared/style";
import styled from "styled-components";

const imgTest = service => {
  if (service.categoryImage.thumbnail) {
    return service.categoryImage.thumbnail;
  } else {
    return noImg;
  }
};

export default ({ productCategory = [], onProceed }) => (
  <section id="services" name="services">
    {/* <Title className="mb-md-5 mt-md-4">Product Lines</Title> */}
    <CardContainer fluid>
      <CardRow>
        {productCategory.map(item => {
          const { description, name } = item;
          return (
            <CardCol md={6}>
              <Card
                onClick={param => {
                  onProceed(item);
                }}
              >
                <img src={imgTest(item)} alt="" />
                <InfoWrapper>
                  <Name>{name}</Name>
                  <Dec>{description}</Dec>
                </InfoWrapper>
              </Card>
            </CardCol>
          );
        })}
      </CardRow>
    </CardContainer>
  </section>
);
const cardGap = 2;
const CardContainer = styled(Container)`
  max-width: 1366px;
  padding-left: ${cardGap}px !important;
  padding-right: ${cardGap}px !important;
`;
const CardRow = styled(Row)`
  margin-left: -${cardGap}px !important;
  margin-right: -${cardGap}px !important;
`;

const CardCol = styled(Col)`
  padding: ${cardGap}px !important;
`;

const Card = styled("div")`
  width: 100%;
  padding-top: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%) scale(1.2) rotate(-5deg); */
    transform: translate(-50%, -50%);
    transition: 0.3s;
    filter: grayscale(0.2);
  }
  &:hover {
    img {
      filter: grayscale(1);
      /* transform: translate(-50%, -50%); */
    }
  }
`;

const InfoWrapper = styled("div")`
  position: absolute;
  bottom: 0;
  padding: 0 12px 12px;
  width:100%;
  /* background: ${fade("#000000", 0.25)}; */
`;
const Name = styled("h3")`
  font-family: Oswald;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  margin: 0;
`;
const Dec = styled("p")`
  color: #fff;
  font-size: 14px;
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  line-height: 1.2;
`;

const Title = styled("h2")`
  text-align: center;
  color: rgb(34, 34, 34);
  font-size: 46px;
  font-weight: 400;
  font-family: Oswald;
`;
