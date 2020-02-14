import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import {Container, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom'


import productImg from '../assets/images/product.png';

export default class TxProduct extends React.Component {
    render(){
        const item = {
            height: "10rem",
        background: "#4DC7A0",
        padding: "1rem",
        };
        const imgBlock = {
            width:'16.875em',
            height:'21.75em'
        };
        const imgText= {
            position: "absolute",
            left: "1.5em",
            top: "18em",
            margin: "auto",
            color: "white",
            fontSize: "1em",
            fontWeight: "bold",
        };
        const cartBtn = {
            borderRadius: '30px',
            backgroundColor: 'transparent',
            color: '#5567dd',
            borderColor: '#5567dd',
            fontSize: '12px',
        };
        // const iconb = {
        //     backgroundImage: backIcon
        // };
        return (

              <Container style={{paddingBottom:'15em'}}>
                  <Row>
                      <Col>
                          <div style={{fontSize:'2rem',fontWeight: 'bold',paddingBottom:'1em'}} className="d-inline">Our Products</div>
                          <Link to="/product-list"><Button style={cartBtn} color="primary" className="float-right">All Products</Button></Link>
                      </Col>
                      {/*<Col>*/}
                         {/*<img src={backIcon}/>*/}
                      {/*</Col>*/}
                  </Row>
                  {/*<Row>*/}
                      {/*<Col>*/}
                          {/*<div style={{fontSize:'0.875rem',fontWeight: 'lighter',width:'35.625em',paddingBottom:'3.75em'}}>Cursus eget nunc scelerisque viverra mauris in aliquam. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Cursus in hac habitasse platea. Netus et malesuada fames ac. Volutpat consequat mauris nunc</div>*/}
                      {/*</Col>*/}
                  {/*</Row>*/}
                  <Row>
                    <Col>
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            nav
                            items={4}
                            dots={false}
                            // navClass={'[\'backIcon\',\'owl-next\']'}
                        >
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>
                            <div ><img src={productImg} style={imgBlock}/></div>


                        </OwlCarousel>
                    </Col>
                  </Row>
              </Container>
        );
    }
}
