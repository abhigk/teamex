import styled from "styled-components";
import { Input } from "reactstrap";
import { mediaMax } from "../../../../shared/style";

export const DirectorMessage = styled("div")`
  min-height: 110px;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 40px;
  color: white;
`;

export const DirectorMessageTitle = styled("div")`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  color: white;
  margin-bottom: 20px;
`;

export const ParagraphHeading = styled("div")`
  font-weight: bold;
  font-size: 20px;
`;
export const Paragraph = styled("p")`
  font-size: 16px;
  font-family: Segoe UI;
`;

export const Quote = styled("p")`
  margin-top: 20px !important;
  margin-bottom: 50px !important;
  font-size: 26px;
  font-style: italic;
  font-weight: light;
`;

export const NiceLookingButton = styled("button")`
  background: white;
  border: 1px solid transparent;
  background: #598ccb;

  margin-left: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-family: Oswald;
  color: white;
  text-transform: uppercase;
  min-width: 100px;
  height: 36px;
  line-height: 32px;
  transition: 0.2s ease all;

  &:hover {
    border-color: #598ccb;
    background: white;
    color: #598ccb;
  }
`;

export const SubtlyAnimatedImage = styled("img")`
  transition: 0.2s ease all;
  border-radius: 6px;
  border: 6px solid #fff;
  box-shadow: 0 0 6px 0px #e9542e;
  ${mediaMax.desktop`margin-top:30px;`};
  &:hover {
  }
`;
