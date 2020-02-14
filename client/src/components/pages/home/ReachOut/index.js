import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import {
  ReachOut,
  ReachOutTitle,
  ParagraphHeading,
  Paragraph,
  CustomInput,
  NiceLookingButton
} from "./style";
import logo from "../../../../assets/images/logo.png";
import fbIcon from "../../../../assets/icons/facebook.png";
import instaIcon from "../../../../assets/icons/instagram.png";

export default ({ form }) => (
  <ReachOut id="contact-teamex">
    <ReachOutTitle>Reach Out</ReachOutTitle>
    <Container>
      <Row>
        <Col md={4}>
          <ParagraphHeading>Contact Info</ParagraphHeading>
          <a
            href="https://www.google.co.in/maps/dir//Teamex+Edu,+421-424,+4th+Floor,+Vishala+Supreme,+Sardar+Patel+Ring+Rd,+opp.+Torrent+Power,+Nikol,+Ahmedabad,+Gujarat+382350/@23.0118965,72.6616253,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e87b1bd6757e9:0x1deb10fafaf8284e!2m2!1d72.669837!2d23.0139174"
            target="_blank"
          >
            <Paragraph>
              421-424, 4th Floor, Vishala Supreme, Opp Torrent Power, SP Ring
              Road, Nikol, Ahmedabad- 382350.
            </Paragraph>
          </a>
          <ParagraphHeading>Phone Number</ParagraphHeading>
          <Paragraph>+91-7069121213</Paragraph>
          <ParagraphHeading>For any queries, write to</ParagraphHeading>
          <Paragraph>
            <a href="mailto:info@teamex.in">Info@Teamex.In</a>
          </Paragraph>
          <img
            src={fbIcon}
            onClick={() =>
              window.open("https://www.facebook.com/Teamex.Retail.Ltd/")
            }
            style={{
              height: "23px",
              width: "23px",
              marginRight: "1em",
              cursor: "pointer"
            }}
          />
          <img
            src={instaIcon}
            onClick={() => window.open("https://www.instagram.com/teamex_ltd/")}
            style={{ height: "23px", width: "23px", cursor: "pointer" }}
          />
        </Col>
        <Col md={4}>
          <ParagraphHeading>Write to us</ParagraphHeading>
          <Paragraph>
            Please write to us using the contact form below if you would like to
            know more about the opportunity, share ideas, give feedback, have
            complaints, or would simply like to request a catalogue
          </Paragraph>
          {form}
          {/* <Form>
            <FormGroup>
              <CustomInput type="text" placeholder="Name" />
              <CustomInput type="text" placeholder="Email" />
              <CustomInput type="text" placeholder="Mobile" />
              <CustomInput type="textarea" placeholder="Message" />
            </FormGroup>
            <FormGroup>
              <NiceLookingButton type="submit">Submit</NiceLookingButton>
              <NiceLookingButton type="clear">Clear</NiceLookingButton>
            </FormGroup>
          </Form> */}
        </Col>
        <Col md={4}>
          <Paragraph>
            <img src={logo} style={{ height: 45 }} className="mt-4" />
          </Paragraph>
        </Col>
      </Row>
    </Container>
  </ReachOut>
);
