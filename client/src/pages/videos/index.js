import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ReactPlayer from "react-player";
import videosData from "./videosData";
import Banner from "./banner";
import styled from "styled-components";
import youtubeicon from "./youtubeicon.png";

export default class VideoGallery extends React.Component {
  render() {
    return (
      <>
        <Banner />
        <section className="py-5" style={{ background: "#f2f2f2" }}>
          <Container>
            <Row>
              <Col className="text-center mb-5">
                <Title className="mb-3">Teamex Media</Title>
                <Dec>
                  To watch more videos, subscribe to our official Youtube
                  channel
                </Dec>
                <ChannelLink
                  href="https://www.youtube.com/channel/UChG5bKllQbsnwATXUryFfUg"
                  target="_blank"
                >
                  <img src={youtubeicon} alt="Teamex" />
                </ChannelLink>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {videosData.map((item, i) => {
                return (
                  <Col md={6} lg={4} className="mb-4">
                    <Player url={item.link} controls />
                    <VideoTitle>{item.title}</VideoTitle>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

const Title = styled("h2")`
  font-family: Oswald;
  color: #5567dd;
`;
const Dec = styled("p")``;
const ChannelLink = styled("a")`
  img {
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Player = styled(ReactPlayer)`
  width: 100% !important;
  height: 228px !important;
  margin-bottom: 8px;
  border-radius: 6px;
  overflow: hidden;
`;

const VideoTitle = styled("p")`
  font-family: Oswald;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
