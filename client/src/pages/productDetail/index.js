import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Alert } from "react-bootstrap";
import Slider from "react-slick";
import { mediaMin } from "../../shared/style";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import renderHTML from 'react-render-html';


export default class TxProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      error: false,
      variantType: "",
      errorMessage: ""
    };
    window.scrollTo(0, 0);
  }
  addQuantity() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1
    });
  }
  subtractQuantity() {
    this.setState({
      quantity: this.state.quantity - 1
    });
  }
  addToCart = item => {
    item.quantity = this.state.quantity;

    let cart = [];
    cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    let itemInCart = cart.find(function (obj) {
      return obj.productName === item.productName;
    });

    if (itemInCart) {
      this.setState({
        error: true,
        variantType: "danger",
        errorMessage: "Item is already added in cart"
      });
    } else {
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({
        error: true,
        variantType: "success",
        errorMessage: "Item has been added to cart"
      });
    }

    setTimeout(
      function () {
        this.setState({ error: false });
      }.bind(this),
      5000
    );
  };
  render() {
    const { item } = this.props.location.state;
    console.log("freaking ITEM ", item);

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: true
    };
    return (
      <Section className="py-5">
        <Container>
          <Alert show={this.state.error} variant={this.state.variantType}>
            {this.state.errorMessage}
          </Alert>
          <Row className="text-center text-lg-left">
            <Col lg={4}>
              <Title className="d-lg-none mb-4">{item.productName}</Title>
              <div className="mx-auto mb-4" style={{ maxWidth: 300 }}>
                <Slider {...settings}>
                  {item.imageUrl.map(img => {
                    return (
                      <div>
                        <img
                          src={img.thumbnail}
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col>
                  <Title className="d-none d-lg-block mb-4">
                    {item.productName}
                  </Title>
                  {item.description &&
                    <Dec>        {renderHTML(item.description)}
                    </Dec>}


                  <Price>₹{item.basePriceUnit}</Price>

                  <CartButton onClick={() => this.addToCart(item)}>
                    Add to Cart
                  </CartButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
const Section = styled("section")`
  display: flex;
  align-items: center;
  ${mediaMin.desktop`min-height: calc(100vh - 176px);`};
`;
const Title = styled("h2")`
  font-family: Oswald;
  font-weight: bold;
  color: #5567dd;
`;
const Dec = styled("p")`
  font-size: 18px;
`;
const Price = styled("p")`
  font-family: Oswald;
  font-weight: bold;
  font-size: 26px;
`;

const CartButton = styled("button")`
  background: white;
  border: 1px solid transparent;
  background: rgb(51, 51, 51);
  padding: 5px;
  margin-left: 0px;
  margin-right: 10px;
  font-size: 16px;
  font-family: Oswald;
  color: white;
  text-transform: uppercase;
  min-width: 150px;
  height: 48px;
  transition: 0.2s ease all;

  &:hover {
    border-color: rgb(51, 51, 51);
    background: white;
    color: rgb(51, 51, 51);
  }
`;
