import styled from "styled-components";
import { mediaMax } from "../../../../shared/style";

export const Section = styled("section")`
  padding: 60px 0;
  color: #000;
`;

export const Title = styled("h2")`
  color: rgb(34, 34, 34);
  font-size: 46px;
  font-weight: 400;
  font-family: Oswald;
  ${mediaMax.desktop`font-size: 42px;`};
  ${mediaMax.tablet`font-size: 38px;`};
  ${mediaMax.phone`font-size: 32px;`};
`;

export const Product = styled("div")`
  box-shadow: 0 0 4px #d1d1d1;
  border: 7px solid #fff;
  color: rgb(34, 34, 34);
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  font-family: Oswald;
  transition: 0.2s ease all;
  ${mediaMax.desktop`font-size: 20px;`};
  ${mediaMax.tablet`font-size: 20px;`};
  ${mediaMax.phone`font-size: 18px;`};

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }

  img {
    width: 100%;
  }
`;

export const ProductTitle = styled("div")`
  color: rgb(34, 34, 34);
  font-size: 22px;
  font-weight: bold;
  font-family: Oswald;
  text-align: left;
  padding-left: 20px;
`;

export const ProductDescription = styled("div")`
  color: rgb(34, 34, 34);
  font-size: 18px;
  font-weight: normal;
  font-family: Oswald;
  text-align: left;
  padding-left: 20px;
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
