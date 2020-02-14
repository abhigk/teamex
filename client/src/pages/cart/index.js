import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import { Alert } from "reactstrap";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const axios = require("axios");

export default class TxCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: "",
      netAmount: "", // need to update payment with actual payment,
      paymentValidateMessage: "",
      cartProducts: [],
      quantity: 0,
      flatNumber: "",
      address: "",
      city: "",
      state: "",
      payment: "",
      customerName: "",
      phoneNo: "",
      error: false,
      variantType: "",
      errorMessage: "",
      email: ""
    };
    this.state.cartProducts = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    console.log("lS", this.state.cartProducts);
  }

  changePayment = event => {
    const paymentVal = event.target.value;
    this.setState({
      paymentMethod: paymentVal
    });
  };
  addQuantity(item) {
    let q = item.quantity;
    item.quantity = ++q;
    item.totalPrice = item.quantity * item.basePriceUnit;

    console.log("append", item);
    this.setState({});
  }
  subtractQuantity(item) {
    debugger;
    if (item.quantity > 1) {
      let q = item.quantity;
      item.quantity = --q;
      item.totalPrice = item.quantity * item.basePriceUnit;
    }

    console.log("sub", item);
    this.setState({});
  }

  deleteItem(item) {
    console.log("deleted");
    let ary = this.state.cartProducts.filter(function (obj) {
      return obj.productName !== item.productName;
    });
    this.setState({
      cartProducts: ary
    });
    localStorage.setItem("cart", JSON.stringify(ary));
  }

  onFormSubmit() {
    debugger;
    console.log("submit");
    console.log("state: ", this.state);

    let productAry = this.state.cartProducts;

    let amt = 0;

    for (let i = 0; i < productAry.length; i++) {
      amt = amt + productAry[i].basePriceUnit * productAry[i].quantity;
    }

    console.log("TOTAL CART AMT: ", amt);
    let objPost = {
      productId: this.state.cartProducts,
      customerName: this.state.customerName,
      flatNumber: this.state.flatNumber,
      state: this.state.state,
      address: this.state.address,
      pinCode: this.state.pinCode,
      city: this.state.city,
      phoneNo: this.state.phoneNo,
      orderMethod: this.state.paymentMethod,
      netAmount: `${1}`,
      email: this.state.email
    };

    fetch("https://api.teamex.in/api/users/generateOrder", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(objPost)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "data");
        if (data.statusCode === 200 && this.state.paymentMethod === "COD") {
          localStorage.setItem("orderDetails", JSON.stringify(data.data));
          this.setState({
            error: true,
            variantType: "success",
            errorMessage:
              "Your order has been placed, redirecting you to order summary"
          });
          setTimeout(
            function () {
              this.setState({ error: false });
              if (this.state.paymentMethod === "COD")
                this.props.history.push("/orders");
            }.bind(this),
            5000
          );
        } else if (
          data.statusCode === 200 &&
          this.state.paymentMethod === "PAYTM"
        ) {
          localStorage.setItem("orderDetails", JSON.stringify(data.data));
          this.setState({
            error: true,
            variantType: "success",
            errorMessage:
              "Your details has been fetched successfully, redirecting to paytm gateway for payment"
          });
          setTimeout(
            function () {
              window.location.href =
                "https://paytm.teamex.in/paywithpaytm?amount=" + amt;
              // window.location.href = "https://paytm.teamex.in?amount=" + amt;

              this.setState({ error: false });
            }.bind(this),
            5000
          );
        }
        if (data.statusCode === 400) {
          this.setState({
            error: true,
            variantType: "danger",
            errorMessage:
              "Please fill up all the details below and then place your order"
          });

          setTimeout(
            function () {
              this.setState({ error: false });
            }.bind(this),
            5000
          );
        }
      });
  }
  render() {
    console.log(this.state.cartProducts, "item.totalPrice");
    const itemBlock = {
      display: "flex",
      flexDirection: "column"
    };
    const imgBlock = {
      width: "4em",
      height: "5em"
    };
    const qtyBtn = {
      borderRadius: "0px",
      backgroundColor: "transparent",
      color: "black",
      padding: "0px 0.5em",
      fontSize: "1rem",
      margin: "0 0.5em"
    };
    const inputBox = {
      width: window.matchMedia("(max-width: 600px)").matches ? "" : "24em",
      padding: "1.8rem 1.6rem",
      fontSize: "0.87rem",
      fontWeight: "bold",
      borderRadius: "0rem",
      marginBottom: "1em",
      backgroundColor: "#ffffff"
    };
    const nextBtn = {
      borderRadius: "0px",
      backgroundColor: "#5567dd",
      padding: "1.2rem 1.6rem",
      fontSize: "1rem",
      fontWeight: "bold"
    };
    const navbarItemDesign = {
      paddingRight: "55px",
      fontSize: "12px",
      marginTop: "1em"
    };
    const contactBtn = {
      borderRadius: "0px",
      backgroundColor: "#5567dd",
      padding: "0.5em 1.5em",
      boxShadow: "12px 11px #888888",
      marginTop: "2em"
    };

    return (
      <section style={{ backgroundColor: "#f5f5f5" }}>
        <Container>

          {this.state.error &&
            <Alert show={this.state.error} variant={this.state.variantType}>
              {this.state.errorMessage}
            </Alert>
          }
          <Row>
            <h2 style={{ padding: "2em" }}>Place your order here!</h2>
          </Row>

          <div>
            <Row>
              <Col md="12">
                <p style={{ color: "red" }}>
                  {this.state.paymentValidateMessage}
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div>
                  {this.state.cartProducts.length === 0 ? (
                    <h5 style={{ textAlign: "center", paddingTop: "15%" }}>
                      No Items available
                    </h5>
                  ) : (
                      this.state.cartProducts.map((item, i) => {
                        return (
                          <div
                            className="d-flex"
                            style={{
                              paddingLeft: window.matchMedia("(max-width: 600px)")
                                .matches
                                ? ""
                                : "5em",
                              paddingRight: window.matchMedia(
                                "(max-width: 600px)"
                              ).matches
                                ? ""
                                : "5em",
                              paddingTop: "1em",
                              paddingBottom: "1em"
                            }}
                          >
                            <div className="p-2">
                              <img
                                src={item.imageUrl[0].thumbnail}
                                style={imgBlock}
                              />
                            </div>
                            <div className="p-3" style={{ fontSize: "1.2rem" }}>
                              {item.productName}
                              <div style={{ position: "relative" }}>
                                <Button
                                  style={qtyBtn}
                                  color="primary"
                                  onClick={() => this.addQuantity(item)}
                                >
                                  +
                              </Button>
                                x {item.quantity}
                                <Button
                                  style={qtyBtn}
                                  color="primary"
                                  onClick={() => this.subtractQuantity(item)}
                                >
                                  -
                              </Button>
                              </div>
                            </div>
                            <div
                              className="ml-auto p-3 bd-highlight"
                              style={{ color: "#5567dd" }}
                            >
                              ₹
                            {item.totalPrice || item.totalPrice === 0
                                ? item.totalPrice
                                : item.basePriceUnit}
                              <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                onClick={() => this.deleteItem(item)}
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                </div>
              </Col>

              <Col lg="6">
                <div>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "2em",

                      margin: "2em"
                    }}
                  >
                    {this.state.cartProducts.length === 0 ? (
                      <div style={{ paddingBottom: "1em" }}> No Items </div>
                    ) : (
                        <div style={{ paddingBottom: "1em" }}> All Items </div>
                      )}
                    {this.state.cartProducts.map((item, i) => {
                      return (
                        <div style={{ paddingBottom: "2em" }}>
                          {" "}
                          <span style={{ paddingRight: "15em" }}>
                            {item.productName}
                          </span>
                          <span
                            style={{
                              paddingRight: "2em",
                              left: "19em",
                              position: "absolute"
                            }}
                          >
                            x{item.quantity}
                          </span>{" "}
                          Rs.{" "}
                          {item.totalPrice || item.totalPrice === 0
                            ? item.totalPrice
                            : item.basePriceUnit}{" "}
                        </div>
                      );
                    })}
                    <div>
                      <Button
                        className="w-100"
                        onClick={() => this.onFormSubmit()}
                        style={nextBtn}
                      >
                        Place your order
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row
              style={{
                paddingBottom: window.matchMedia("(max-width: 600px)").matches
                  ? ""
                  : "5em",
                paddingLeft: window.matchMedia("(max-width: 600px)").matches
                  ? ""
                  : "5em"
              }}
            >
              <Col>
                <div style={{ padding: "1em" }}>Delivery Address:</div>
                <Form
                  style={{
                    paddingLeft: window.matchMedia("(max-width: 600px)").matches
                      ? ""
                      : "1em",
                    padding: window.matchMedia("(max-width: 600px)").matches
                      ? "1em"
                      : ""
                  }}
                >
                  <FormGroup>
                    <Input
                      type="text"
                      style={inputBox}
                      name="flatNumber"
                      placeholder="Flat Number"
                      value={this.state.flatNumber}
                      onChange={e =>
                        this.setState({ flatNumber: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      style={inputBox}
                      name="address"
                      placeholder="Address"
                      value={this.state.address}
                      onChange={e => this.setState({ address: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      style={inputBox}
                      name="city"
                      placeholder="City"
                      value={this.state.city}
                      onChange={e => this.setState({ city: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      style={inputBox}
                      name="state"
                      placeholder="State"
                      value={this.state.state}
                      onChange={e => this.setState({ state: e.target.value })}
                    />
                  </FormGroup>
                  <div style={{ padding: "1em" }}>Payment:</div>
                  <FormGroup check style={inputBox}>
                    <Label check>
                      <Input
                        onChange={this.changePayment}
                        value="PAYTM"
                        type="radio"
                        name="radio1"
                      />{" "}
                      Pay through Paytm
                    </Label>
                  </FormGroup>
                  {/* <FormGroup check style={inputBox}>
                    <Label check>
                      <Input
                        onChange={this.changePayment}
                        type="radio"
                        value="COD"
                        name="radio1"
                      />{" "}
                      Cash on Delivery
                    </Label>
                  </FormGroup> */}
                  <div style={{ padding: "1em" }}>Contact Details:</div>
                  <FormGroup>
                    <Input
                      type="text"
                      style={inputBox}
                      name="customerName"
                      placeholder="Customer Name"
                      value={this.state.customerName}
                      onChange={e =>
                        this.setState({ customerName: e.target.value })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      style={inputBox}
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="number"
                      style={inputBox}
                      name="contactNumber"
                      placeholder="Phone Number"
                      value={this.state.phoneNo}
                      onChange={e => this.setState({ phoneNo: e.target.value })}
                    />
                  </FormGroup>
                  <br />
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    );
  }
}
