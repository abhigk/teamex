import React from 'react';

import { Container, Row, Col, Button } from 'reactstrap';
import bannerTop from '../assets/images/ic_banner_top.png'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class TxMainScreen extends React.Component {

    render() {
        const textBlock = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };
        const contactBtn = {
            borderRadius: '0px',
            backgroundColor: '#5567dd',
            padding: '0.5em 1.5em',
            boxShadow: '12px 11px #888888',
            marginTop: '2em'
        };
        const navbarItemDesign = {
            paddingRight: '55px',
            fontSize: '12px',
            marginTop: '1em'
        };
        return (
            <React.Fragment>
                <Container fluid style={{ paddingBottom: '20em' }}>
                    <Row>
                        <Col md="6" style={textBlock}>
                            <div style={{ alignSelf: 'center' }}>
                                <h2 style={{ width: '15em', fontWeight: 'bold' }}>We provide best product, service and self-fulfillment needs of everyone globally</h2>
                                <Link activeClass="active" to="contact-teamex" spy={true} smooth={true} style={navbarItemDesign} >
                                    <Button style={contactBtn}>Contact Us</Button>
                                </Link>
                                <Link activeClass="active" to="services" spy={true} smooth={true} style={navbarItemDesign} >
                                    <Button style={contactBtn}>Shop our products</Button>
                                </Link>

                            </div>
                        </Col>
                        <Col md="6">
                            <img src={bannerTop} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

}
