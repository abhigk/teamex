import styled from "styled-components";
import { Input } from "reactstrap";

export const ReachOut = styled("div")`
  min-height: 110px;
  // background: #58c4eb;
  background: #e6f4ff;
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 40px;
  color: #fff;
  background: black;
`;

export const ReachOutTitle = styled("div")`
  text-align: center;
  font-size: 36px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 20px;
`;

export const ParagraphHeading = styled("div")`
  font-weight: bold;
  font-size: 20px;
`;
export const Paragraph = styled("p")`
  font-size: 17px;
`;

export const CustomInput = styled(Input)`
  margin-bottom: 10px !important;
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
