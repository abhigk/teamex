import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import {
  Section,
  Title,
  Product,
  ProductTitle,
  ProductDescription,
  ProductImage
} from "./styles";
import Banner from "./banner";

class TxProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productListHome: []
    };
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.render();
    }, 50000);
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
  productDetails() {
    this.props.history.push("/product-detail");
  }
  testC(item) {
    // console.log('IIIII',itemObj);
    this.props.history.push("/product-detail", { item: item });
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Banner />
        <Section>
          <Container>
            <div>
              <Row>
                {this.state.productListHome.map((data, i) => (
                  <Col md={6} lg={4} className="mt-4 ">
                    <Product
                      onClick={() =>
                        history.push("/product-detail", { item: data })
                      }
                    >
                      <ProductImage>
                        <img src={data.imageUrl[0].thumbnail} />
                      </ProductImage>
                      <div className="py-2">
                        <ProductTitle>{data.productName}</ProductTitle>
                        <ProductDescription>
                          MRP ₹{data.basePriceUnit} incl. of all taxes
                        </ProductDescription>
                      </div>
                    </Product>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </Section>
      </>
    );
  }
}

export default withRouter(TxProductList);
