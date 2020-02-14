import styled from "styled-components";

export const OurVideos = styled("div")`
  min-height: 110px;
  // background: #58c4eb;
  background: white;
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 40px;
  color: rgb(79, 76, 77);
`;

export const OurVideosTitle = styled("div")`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  color: black;
  margin-bottom: 20px;
`;

export const GreenLookingButton = styled("button")`
  background: white;
  border: 1px solid #2c9d2e;
  background: white;
  margin-top: 20px;
  margin-bottom: 20px;

  margin-left: 0px;
  margin-right: 10px;
  min-width: 200px;
  padding: 5px;
  font-size: 16px;
  font-family: Oswald;
  color: #2c9d2e;
  text-transform: uppercase;

  line-height: 32px;
  transition: 0.2s ease all;

  &:hover {
    border-color: #2c9d2e;
    background: #2c9d2e;
    color: white;
  }
`;
