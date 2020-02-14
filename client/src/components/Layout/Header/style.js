import styled, { css } from "styled-components";
import { Container, Button } from "reactstrap";
import { mediaMax, mediaMin } from "../../../shared/style";
import { Nav } from "reactstrap";
export const Header = styled("header")`
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;

  ${({ sticky }) =>
    sticky &&
    css`
      box-shadow: 0 0 4px 0 #b9b9b9;
    `};

  .navbar-expand-md .navbar-collapse {
    ${mediaMax.largeDesktop`&.collapse:not(.show) {display:block !important;}`};
  }
  .navbar-nav {
    align-items: center;
    font-family: Oswald;
    /* ${mediaMax.largeDesktop`display:block;`}; */
    li {
      padding: 0;
      margin: 0 12px;
      a {
        font-size: 16px;
        text-transform: uppercase;
      }
    }
  }
`;

export const CardContainer = styled(Container)`
  max-width: 1366px;
  ${mediaMax.largeDesktop`flex-wrap:wrap !important;`};
`;

export const CartButton = styled(Button)`
  border-radius: 0px;
  background: white !important;
  border: 1px solid #0f61ab !important;
  color: #0f61ab !important;
  font-family: Oswald !important;
  text-transform: Uppercase !important;

  &:hover {
    background: #0f61ab !important;
    color: white !important;
  }
`;

export const NavItem = styled("li")`
  .nav-link {
    ${mediaMax.largeDesktop`color: #fff !important;`};
  }
`;

export const ToggleButton = styled("button")`
  padding: 0;
  border: 0;
  background: transparent;
  height: fit-content;
  line-height: 1;
  font-size: 27px;
  cursor: pointer;
  outline: none !important;
  position: relative;
  z-index: 2;
  ${({ isOpen }) => isOpen && `color: #fff;`}
`;

const mobileMenuNav = css`
  background: #333333;
  margin: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: -100vw;
  flex-direction: column !important;
  align-items: baseline !important;
  padding: 30px;
  transition: 0.3s;
  ${({ isOpen }) => isOpen && `left: 0;`};
`;
export const MenuNav = styled(Nav)`
  ${mediaMax.largeDesktop`${mobileMenuNav}`};
`;

export const DropDownItemsWrapper = styled("div")`
  position: absolute;
  top: 100%;

  background: #fff;

  width: 150px;
  padding: 0 10px;
  height: 0;
  transition: 0.3s;
  overflow: hidden;
  ${mediaMin.largeDesktop`left: 50%;
  transform: translateX(-50%);`};
  .item {
    margin: 4px 0;
    height: 24px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      color: #000;
    }
  }
`;

export const DropDownWrapper = styled("div")`
  position: relative;
  .heading {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    ${mediaMax.largeDesktop`color: #fff;`}
  }
  &:hover {
    ${DropDownItemsWrapper} {
      height: ${({ length }) => length * 28 + 4}px;
      box-shadow: 0 0 4px #d1d1d1;
      padding: 0 10px 10px;
    }
  }
`;
