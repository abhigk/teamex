import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { fade } from "../../shared/style";

const bannerImage =
  "https://images.unsplash.com/photo-1576871194190-227feda1116f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=40";
export default () => (
  <Section style={{ background: `url(${bannerImage}) center / cover` }}>
    <Container>
      <Title>Teamex Products</Title>
    </Container>
  </Section>
);

const Section = styled("section")`
  padding: 60px 0;
  min-height: 450px;
  align-items: center;
  display: flex;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: linear-gradient(45deg, black, rgba(233, 82, 44, 0.08));
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .container {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled("h2")`
  color: #fff;
  font-family: Oswald;
  line-height: 1.5;
`;
