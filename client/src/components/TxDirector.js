import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import placeholderImg from '../assets/images/763x584.png'
import director from '../assets/images/director.png'

export default class TxDirector extends React.Component {
    render() {
        const blackCard = {
            display: 'block',
            backgroundColor: '#222222',
            height:'37em',
            width:'70em',
            borderRadius:'0.5em',
            color:'#ffffff',
            paddingTop: '4.8em',
            paddingLeft:'3.5em'
        };
        return (
            <Container style={{paddingTop:'15em',paddingBottom:'15em'}}>
                <div style={blackCard}>
                    <Row>
                    <Col md="6">
                        <Row>
                            <Col>
                                <div style={{color:'#ffffff',fontWeight: 'lighter',marginBottom:'3em'}}>DIRECTOR MESSAGE</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{color:'#ffffff',fontWeight:'bold',fontSize:'1rem',width:'24em',marginBottom:'1.6em'}}>Teamex is all about economic, social and intelligence growth. Youngster's of teamex works hard to make developed community in country.</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{color:'#ffffff',fontWeight: 'lighter',width:'24em'}}>Develpoing India through technology. Teamex is an institution who adapted advance technology and models to spread the awareness about key basic needs like Education, Health, Leasure and Agriculture. Direct selling is a best way to deliver product with high value. We don't say, we do it. Delivering best product at best value and satisfying customer needs through best service with good business opportunity. Yes we are teamex.</div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <img src={director} style={{position: 'relative',height:'22em',borderRadius:'1em'}}/>
                    </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}
