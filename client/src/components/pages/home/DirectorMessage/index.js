import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import {
  DirectorMessage,
  DirectorMessageTitle,
  ParagraphHeading,
  Paragraph,
  NiceLookingButton,
  Quote,
  SubtlyAnimatedImage
} from "./styles";
import director from "../../../../assets/images/director.png";
export default () => (
  <DirectorMessage>
    <DirectorMessageTitle>Director's Message</DirectorMessageTitle>
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <Quote>
            "It is my pleasure to welcome you to one of the fastest growing
            community Teamex retail limited."
          </Quote>
          <Paragraph>
            As Teamex distributor, your success and rapid growth are very
            important to all of us. Remember, we are here for a motive, we are
            here to achieve our set goals and we are here to make you the real
            you. We're committed to supporting you as you build your business on
            a proven path. teamex offers you world class products, unique
            business model, profile and well experienced management.
          </Paragraph>
          <Paragraph>
            <Paragraph>
              Teamex has always been value driven organization. Our goal has
              never been totally about the money, it what people can do with
              their hard-earned money to create opportunities. Our drive is to
              create a culture that is intense, passionate and loyal to the
              products and the company. We at teamex make a difference by
              sharing and building teams for the transformation of people’s
              lives through our natural and safe products.
            </Paragraph>
          </Paragraph>
          <Paragraph>
            I would also like to encourage all of you to capitalize on the
            opportunity to stand on your own feet and be independent from the
            hardships of life. If you want to provide a better lifestyle for
            your family and yourself, go ahead connect with us at teamex retail
            limited. I wish you all the very best and all the success.
          </Paragraph>
        </Col>
        <Col lg={6}>
          <SubtlyAnimatedImage
            src={director}
            alt=""
            style={{
              width: "100%"
            }}
          />
        </Col>
      </Row>
    </Container>
  </DirectorMessage>
);
