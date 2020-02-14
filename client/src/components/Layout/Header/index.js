/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {
  Header,
  NavItem,
  CardContainer,
  CartButton,
  ToggleButton,
  MenuNav,
  DropDownWrapper,
  DropDownItemsWrapper
} from "./style";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink
} from "reactstrap";
import MenuIcon from "./menuIcon";
import { Link } from "react-router-dom";

import cartIcon from "../../../assets/icons/shopping-cart.png";
class TxNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,
      sticky: false,
      productCategory: [],
      page: ""
    };
  }

  handleScroll = () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition >= 72) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  componentDidMount() {
    this.setState({ stickey: window.scrollY >= 72 ? true : false });
    window.addEventListener("scroll", this.handleScroll);
    fetch(`https://api.teamex.in/web/getWebCategory`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'authorization': `bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(Moment(data.data[0].deliveredOn).format('LLLL'), 'data')
        console.log(data, "datacategory");

        if (data.statusCode === 200) {
          // localStorage.setItem('access_token', data.data.access_token);
          this.setState({
            productCategory: data.data,
            categoryName: data.data[0].name
          });
          console.log("PRODUCT CAT ", this.state.productCategory);
          console.log("categoryName ", this.state.categoryName);
        }
      });

    fetch(`https://api.teamex.in/web/getWebProduct`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        // 'authorization': `bearer ${accessToken}`
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(Moment(data.data[0].deliveredOn).format('LLLL'), 'data')
        console.log(data.data, "data123");

        if (data.statusCode === 200) {
          // localStorage.setItem('access_token', data.data.access_token);
          console.log("ORIGNAL Products", data.data);

          // this.setState({
          //     productListHome: data.data.map((i) => (<img src={productImg} style={{width: '16.875em',
          //         height: '21.75em'}} />))
          //
          // });

          this.setState({
            productListHome: data.data
          });

          console.log("productHOMe", this.state.productListHome);
        }
      });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  routeChange() {
    this.props.history.push("/cart");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  windowLocation() {
    window.open("https://web.teamexbiz.in/?id=tmx");
  }
  videoLocation() {
    this.props.history.push("/video-gallery");
  }
  scrollTest = loc => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (this.props.location.pathname !== "/") {
      this.props.history.push("/", { test: loc });
    }

    this.props.sendLocation(loc);
  };
  onProceed(item) {
    this.props.history.push(`/product-list/${item.name}`, {
      category: item.name
    });

    window.location.href = `/product-list/${item.name}`;
  }

  render() {
    const { sticky, isOpen, productCategory } = this.state;
    const navbarItemDesign = {
      paddingRight: "55px",
      fontSize: "12px",
      marginTop: "1em",
      color: "black",
      cursor: "pointer"
    };
    console.log(this.state.productCategory, "razat");
    return (
      <Header sticky={sticky}>
        <Navbar light expand="md">
          <CardContainer fluid>
            <NavbarBrand href="/">
              <img src={logo} style={{ height: "5vh" }} />
            </NavbarBrand>
            {/* <NavbarToggler
              className="d-block d-xl-none"
              onClick={this.toggle}
            /> */}
            <ToggleButton
              onClick={this.toggle}
              className="d-xl-none"
              isOpen={isOpen}
            >
              <MenuIcon />
            </ToggleButton>

            <MenuNav isOpen={isOpen} className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.scrollTest("services")}>
                  Company
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.scrollTest("about-teamex")}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/franchise">Franchise</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.scrollTest("contact-teamex")}>
                  Contact Us
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink onClick={() => this.scrollTest("services")}>
                  Shop Products
                </NavLink>
              </NavItem> */}
              <NavItem>
                <DropDownWrapper length={productCategory.length}>
                  <p className="heading">Shop Products</p>
                  <DropDownItemsWrapper>
                    {productCategory.map(data => (
                      <p
                        className="item"
                        onClick={() => {
                          this.onProceed(data);
                        }}
                      >
                        {data.name}
                      </p>
                    ))}
                  </DropDownItemsWrapper>
                </DropDownWrapper>
              </NavItem>

              <NavItem>
                <NavLink href="/video-gallery">Video Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.windowLocation}>
                  Distributer Login
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="/cart">
                  <CartButton
                    onClick={this.toggle}
                    className="d-flex align-items-center"
                  >
                    <img
                      src={cartIcon}
                      className="mr-2"
                      style={{
                        height: "1em"
                      }}
                    />
                    Cart
                  </CartButton>
                </Link>
              </NavItem>
            </MenuNav>
          </CardContainer>
        </Navbar>
      </Header>
    );
  }
}

export default withRouter(TxNavbar);
