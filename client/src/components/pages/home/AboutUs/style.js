import styled from "styled-components";
import { mediaMax } from "../../../../shared/style";
export const Section = styled("section")`
  padding: 60px 0;
  color: #fff;
`;

export const Title = styled("h2")`
  color: #fff;
  font-size: 46px;
  font-weight: 400;
  font-family: Oswald;
  ${mediaMax.desktop`font-size: 42px;`};
  ${mediaMax.tablet`font-size: 38px;`};
  ${mediaMax.phone`font-size: 32px;`};
`;
export const DecHeading = styled("h3")`
  color: #fff;
  font-size: 30px;
  ${mediaMax.desktop`font-size: 28px;`};
  ${mediaMax.tablet`font-size: 22px;`};
  ${mediaMax.phone`font-size: 18px;`};
`;
export const SubTitle = styled("h4")`
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  font-family: Oswald;
  ${mediaMax.desktop`font-size: 22px;`};
  ${mediaMax.tablet`font-size: 20px;`};
  ${mediaMax.phone`font-size: 18px;`};
`;
export const Dec = styled("p")`
  color: #fff;
  font-size: 18px;
  ${mediaMax.desktop`font-size: 16px;`};
  ${mediaMax.tablet`font-size: 14px;`};
`;
