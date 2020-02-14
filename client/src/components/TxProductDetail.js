import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import productImg from '../assets/images/product.png';
import { throwStatement } from '@babel/types';
import { Element } from "react-scroll/modules";
import { Alert } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll/modules";

export default class TxProductDetail extends React.Component {

    constructor(props) {
        super(props);
        console.log('propssss...', this.props);
        // test = this.props.location.state;
        this.state = {
            quantity: 1,
            error: false,
            variantType: '',
            errorMessage: ''
        };
        window.scrollTo(0, 0);
    }
    addQuantity() {
        const { quantity } = this.state;
        this.setState({
            quantity: quantity + 1
        })
    };
    subtractQuantity() {
        this.setState({
            quantity: this.state.quantity - 1
        })
    };
    addToCart = (item) => {
        console.log('CART ITEM ', item);
        item.quantity = this.state.quantity;
        // item.totalPrice = this.item.basePriceUnit;
        console.log(item);
        let cart = [];
        cart = localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart')) : [];


        let itemInCart = cart.find(function (obj) {
            return obj.productName === item.productName;
        });

        console.log('cart item  :', itemInCart);
        if (itemInCart) {
            this.setState({
                error: true,
                variantType: 'danger',
                errorMessage: 'Item is already added in cart'
            });
        } else {
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            this.setState({
                error: true,
                variantType: 'success',
                errorMessage: 'Item has been added to cart'
            });
        }

        setTimeout(
            function () {
                this.setState({ error: false });
            }
                .bind(this),
            5000
        );
    };
    render() {
        console.log(this.props, 'props');
        const title = {
            fontWeight: 'bold',
            fontSize: window.matchMedia('(max-width: 600px)').matches ? '2rem' : '3rem',
            color: '#5567dd',
            marginTop: '1em',
            textAlign: window.matchMedia('(max-width: 600px)').matches ? 'center' : ''
        };
        const qtyBtn = {
            borderRadius: '0px',
            backgroundColor: 'transparent',
            color: 'black',
            padding: '0px 0.5em',
            fontSize: '1rem',
            margin: '0 0.5em'
        };
        const cartBtn = {
            borderRadius: '0px',
            backgroundColor: '#5567dd',
            padding: '0.5em 1.5em',
            boxShadow: '12px 11px #888888',
            height: '4em',
            width: window.matchMedia('(max-width: 600px)').matches ? '' : '14em',
            marginLeft: window.matchMedia('(max-width: 600px)').matches ? '' : '1em'
        };
        const item = this.props.location.state.item;
        console.log('freaking ITEM ', item);

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            focusOnSelect: true,
        };
        return (
            <Container style={{ marginTop: '4em', marginBottom: '4em' }}>
                <Alert show={this.state.error} variant={this.state.variantType}>
                    {this.state.errorMessage}
                </Alert>
                <Row>
                    <Col md="6">
                        <Slider {...settings}>
                            {
                                item.imageUrl.map((img) => {
                                    return (
                                        <div>
                                            <img src={img.thumbnail} style={{ height: '100%', width: '100%' }} />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h1 style={title}>{item.productName}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ fontSize: '1rem', width: window.matchMedia('(max-width: 600px)').matches ? '' : '29em', textAlign: window.matchMedia('(max-width: 600px)').matches ? 'center' : '' }}>{item.description}</div>
                            </Col>
                        </Row>
                        <Row style={{ display: 'inline' }}>
                            <Col style={{ display: window.matchMedia('(max-width: 600px)').matches ? 'block' : 'inline' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: window.matchMedia('(max-width: 600px)').matches ? 'center' : '', display: window.matchMedia('(max-width: 600px)').matches ? 'block' : 'inline' }}>₹{item.basePriceUnit}</div>
                            </Col>
                            <Col style={{ display: window.matchMedia('(max-width: 600px)').matches ? 'flex' : 'inline', justifyContent: window.matchMedia('(max-width: 600px)').matches ? 'center' : '' }}>
                                <Button style={cartBtn} onClick={() => this.addToCart(item)}>Add to Cart</Button>
                            </Col>
                        </Row>
                        {/*<div style={{ top: '8em', left: '11.5em', padding: '1em' }}>*/}
                        {/*<Button style={qtyBtn} color="primary" onClick={() => this.addQuantity()}>+</Button>*/}
                        {/*{this.state.quantity}*/}
                        {/*<Button style={qtyBtn} color="primary" onClick={() => this.subtractQuantity()}>-</Button>*/}

                        {/*</div>*/}

                    </Col>
                </Row>
            </Container>
        )
    }
}
