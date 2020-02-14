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
      productList: []
    };
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.render();
    }, 50000);
  }
  componentDidMount() {
    fetch(`https://api.teamex.in/web/getWebProduct`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(Moment(data.data[0].deliveredOn).format('LLLL'), 'data')
        console.log(data.data, "data123");

        if (data.statusCode === 200) {
          // localStorage.setItem('access_token', data.data.access_token);
          console.log("ORIGNAL DATA", data.data);
          console.log("CATEGORY", this.props.history.location.state.category);

          let selectedCategory = this.props.history.location.state.category;
          let ary = data.data.filter(function(obj) {
            return obj.categoryId.name === selectedCategory;
          });

          console.log("FILTERED DATA", ary);

          this.setState({
            productList: ary
          });
        }
      });
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
                {this.state.productList.map((data, i) => (
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
