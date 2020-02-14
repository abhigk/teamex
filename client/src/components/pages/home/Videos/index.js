/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { OurVideos, OurVideosTitle, GreenLookingButton } from "./style";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
const data = [
  {
    title: "TERI KAHANI, TERI ZUBAANI EPISODE 1",
    link: "https://www.youtube.com/watch?v=pwOkceSW-3E"
  },
  {
    title: "Teamex Bhumivita explain by Mr Mayur Gondaliya in Gujarati",
    link: "https://www.youtube.com/watch?v=iVfH6Fbp8Sg"
  },
  {
    title: "Teamex Vruddhivita explain by Mr Mayur Gondaliya in Gujarati ",
    link: "https://www.youtube.com/watch?v=6Q7q7lDLwYI"
  }
];
export default withRouter(({ history }) => (
  <OurVideos id="videos">
    <OurVideosTitle>Our Videos</OurVideosTitle>
    <Container>
      <Row className="justify-content-center">
        {data.map((item, i) => {
          return (
            <Col className="mt-4" md={6} lg={4}>
              <ReactPlayer
                url={item.link}
                width="20em"
                height="12em"
                controls
              />
              <p>{item.title}</p>
            </Col>
          );
        })}
      </Row>

      <center>
        <GreenLookingButton
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
            history.push("/video-gallery");
          }}
        >
          View More
        </GreenLookingButton>
      </center>
    </Container>
  </OurVideos>
));
