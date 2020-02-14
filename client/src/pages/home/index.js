import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  FormGroup,
  Input,
  Alert
} from "reactstrap";
import { Element } from "react-scroll/modules";
import {
  Banner,
  AboutUs,
  OurServices,
  Products,
  ReachOut,
  Videos,
  DirectorMessage,
  Achievers,
  Franchise
} from "../../components/pages/home";
import styled from "styled-components";

import Achivers from "../../components/Achivers";
import noImg from "../../assets/images/noImage.jpg";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import director from "../../assets/images/director.png";
import MapContainer from "../../components/MapContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Radium from "radium";

class TxHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategory: [],
      categoryName: "",
      quantity: 1,
      error: false,
      variantType: "",
      errorMessage: "",
      name: "",
      email: "",
      subject: "",
      message: "",
      previousSt: "",
      productListHome: [],
      isContact: false
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    console.log("prev prop", prevProps.loc);
    console.log("current prop", this.props.loc);

    // this.setState({previousSt:prevProps.loc})

    if (this.props.loc !== prevProps.loc) {
      console.log("in component did update");
      if (this.props.loc) {
        let element = document.getElementById(this.props.loc);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    if (this.props.loc) {
      let element = document.getElementById(this.props.loc);
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  componentDidMount() {
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

    // let name = React.findDOMNode(this.refs.cpDev1);
    // console.log('Coverflow: ',name);
  }
  handleChange = event => {
    console.log(event.target.placeholder);
    if (event.target.placeholder === "Name") {
      this.setState({
        name: event.target.value
      });
    } else if (event.target.placeholder === "Email") {
      this.setState({
        email: event.target.value
      });
    } else if (event.target.placeholder === "Subject") {
      this.setState({
        subject: event.target.value
      });
    } else if (event.target.placeholder === "Message") {
      this.setState({
        message: event.target.value
      });
    }
  };

  contactQuery() {
    this.setState({
      isContact: true
    });
    fetch("https://api.teamex.in/api/users/contact", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        message: this.state.message,
        subject: this.state.subject
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data, "data");
        if (data.statusCode === 200) {
          this.setState({
            error: true,
            variantType: "success",
            errorMessage: "Query registered successfully",
            isContact: false
          });
          setTimeout(
            function() {
              this.setState({ error: false });
            }.bind(this),
            5000
          );
        }
        if (data.statusCode === 400) {
          this.setState({
            error: true,
            variantType: "danger",
            errorMessage: data.message,
            isContact: false
          });

          setTimeout(
            function() {
              this.setState({ error: false });
            }.bind(this),
            5000
          );
        }
      });
  }

  onProduct(name) {
    this.setState({
      categoryName: name
    });
  }

  onProceed(item) {
    console.log(item);
    this.props.history.push("/product-list", { category: item.name });
  }

  testC(item) {
    this.props.history.push("/product-detail", { item: item });
  }

  mediaTest() {
    if (window.matchMedia("(max-width: 600px)").matches) {
      console.log("1rem");
    } else {
      console.log("2rem");
    }
  }

  imgTest(service) {
    if (service.categoryImage.thumbnail) {
      return service.categoryImage.thumbnail;
    } else {
      return noImg;
    }
  }

  render() {
    const { productCategory } = this.state;

    return (
      <>
        <Banner />

        <OurServices
          productCategory={productCategory}
          onProceed={e => this.onProceed(e)}
        />

        <AboutUs />
        <Container>
          <Products products={this.state.productListHome} />
        </Container>

        {/* <Achievers /> */}
        <DirectorMessage />
        <Videos />

        <ReachOut
          form={
            <>
              <FormGroup>
                <Input
                  type="text"
                  className="mb-3"
                  onChange={this.handleChange}
                  name="userName"
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="mb-3"
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="mb-3"
                  type="text"
                  onChange={this.handleChange}
                  name="subject"
                  placeholder="Subject"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  className="mb-3"
                  type="textarea"
                  onChange={this.handleChange}
                  name="message"
                  placeholder="Message"
                />
              </FormGroup>
              <div
                style={{
                  justifyContent: window.matchMedia("(max-width: 600px)")
                    .matches
                    ? "center"
                    : "",
                  display: window.matchMedia("(max-width: 600px)").matches
                    ? "flex"
                    : ""
                }}
              >
                <Button
                  style={{ background: "#598ccb" }}
                  onClick={() => this.contactQuery()}
                  disabled={this.state.isContact}
                >
                  Submit
                </Button>
              </div>

              {this.state.errorMessage && (
                <Alert
                  className="mt-4"
                  show={this.state.error}
                  variant={this.state.variantType}
                >
                  {this.state.errorMessage}
                </Alert>
              )}
            </>
          }
        />
      </>
    );
  }
}
export default Radium(TxHome);

const FormButton = styled("button")`
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
