import React from "react";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import {
  Section,
  Title,
  Product,
  ProductTitle,
  ProductDescription,
  GreenLookingButton
} from "./styles";

export default withRouter(({ history, products }) => {
  return (
    <Section id="products-teamex" name="products-teamex">
      <Container className="text-center">
        <Title className="mb-md-5">Products</Title>

        <Row>
          {products.map(data => {
            console.log(data.productName, "r");
            if (
              (data.productName === "Protein Powder") |
              (data.productName === "Teamex Noni Juice") |
              (data.productName === "Toothpaste") |
              (data.productName === "Beautilook & Detox") |
              (data.productName === "Berry Juice") |
              (data.productName === "Bye Bye Puncture Liquid")
            ) {
              return (
                <Col md={6} lg={4} className="mt-4 ">
                  <Product
                    onClick={() =>
                      history.push("/product-detail", { item: data })
                    }
                  >
                    <img src={data.imageUrl[0].thumbnail}></img>
                    <div className="py-2">
                      <ProductTitle>{data.productName}</ProductTitle>
                      <ProductDescription>
                        MRP ₹{data.basePriceUnit} incl. of all taxes
                      </ProductDescription>
                    </div>
                  </Product>
                </Col>
              );
            }
            return null;
          })}
        </Row>
        <GreenLookingButton
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
            history.push("/products");
          }}
        >
          View More
        </GreenLookingButton>
      </Container>
    </Section>
  );
});
