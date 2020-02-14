import styled from "styled-components";

export const LongFooter = styled("div")`
  min-height: 110px;
  background: black;
  font-size: 14px;
  font-weight: 400;
  font-family: Oswald;
  text-align: center;
  padding-top: 20px;
`;

export const LongFooterCopyright = styled("div")`
  height: 50px;
  line-height: 50px;
  font-weight: lighter;
  color: #fff;
`;

export const LongFooterNavbar = styled("div")`
  height: 40px;
  margin-top: -20px;
  line-height: 50px;
  text-align: center;
`;

export const LongFooterNavLink = styled("a")`
  margin-left: 10px;
  margin-right: 10px;
  color: #fff !important;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
  &:link,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`;
