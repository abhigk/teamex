import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Section, Title, DecHeading, SubTitle, Dec } from "./style";
const bannerImage =
  "https://images.unsplash.com/photo-1531691423032-00138fd0f46a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI5MzI0fQ&auto=format&fit=crop&w=1050&q=80";
export default () => (
  <Section
    id="about-teamex"
    name="about-teamex"
    style={{ background: `url(${bannerImage}) center / cover` }}
  >
    <Container className="text-center">
      <Title className="mb-md-5">About Us</Title>

      <Row className="mb-5">
        <Col>
          <Dec className="mb-md-4">
            Teamex retail limited which started its operations in the year 2013.
            The company started its operations with only three products.
          </Dec>
          <Dec>
            Now we have around 80 products of world class quality. teamex sells
            Ayurvedic healthcare products, personal care products ,home care
            products, lifestyle products, agriculture products,educational
            products. Our products comply with the environmental policies which
            we strongly believe in respecting.Teamex Family is aiming to reach
            every house hold To create a platform for the people who wants to
            get financial freedom in their life. Teamex provides opportunity for
            the financial freedom, those are work hardly in their journey of
            life.
          </Dec>
          <Dec>
            The marketing plan and the management that has been able to deliver
            such a rewarding and sustainable system. Teamex is constantly
            expanding its product range to introduce innovative products every
            year, which are GMP and Halal certified. Teamex is an ISO 9001-2015
            certified company and believes in world class service levels to all
            its customers.
          </Dec>
          <Dec>
            Teamex has been enrolled as a member of Federation of indian Direct
            Selling industries (FIDSI), which is the sole representative of
            Indian direct selling companies.
          </Dec>
          <Dec>
            Our Head Office is based in ahmedabad, gujrat in a state of the art
            building with conference halls, warehouse and other related
            amenities.,A team of young professionals take care of the
            administration and customer support activities. We have a very
            effective customer grievance redressal system.
          </Dec>
        </Col>
      </Row>

      <Row className="text-lg-left">
        <Col className="mb-4 mx-auto" lg={4} style={{ maxWidth: 500 }}>
          <SubTitle className="mb-2"><p style={{ color: '#fff', fontWeight: 'bolder', fontSize: '28px' }}>Our Mission</p></SubTitle>
          <Dec>
            By Teamwork we gather every people of India in our organization to
            create income opportunity that improves economical growth & status
            of India.
          </Dec>
        </Col>

        <Col className="mb-4 mx-auto" lg={4} style={{ maxWidth: 500 }}>
          <SubTitle className="mb-2"><p style={{ color: '#fff', fontWeight: 'bolder', fontSize: '28px' }}>Our Vision</p></SubTitle>
          <Dec>
            To provide the best product, service and self fulfilment needs of
            everyone globally. To create a company that serves everything
            according their needs...
          </Dec>
        </Col>

        <Col className="mb-4 mx-auto" lg={4} style={{ maxWidth: 500 }}>
          <SubTitle className="mb-2"><p style={{ color: '#fff', fontWeight: 'bolder', fontSize: '28px' }}>Our Values</p></SubTitle>
          <Dec>
            Trust, Respect, Teamwork, Leadership Knowledge, By providing the
            best environment, a person will grow personality & professional and
            use knowlege & skills to fulfil own dreams
          </Dec>
        </Col>
      </Row>
    </Container>
  </Section>
);
