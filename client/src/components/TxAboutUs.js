import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

export default class TxAboutUs extends React.Component {
    render(){
        return (
            <Container  style={{paddingBottom:'10em'}}>
                <Row>
                    <Col>
                        <div style={{fontSize:'2rem',fontWeight: 'bold',paddingBottom:'0.813em'}}>About Us</div>
                    </Col>
                </Row>
                <Row>
                    <Col md="4" style={{marginRight:'2em'}}>
                        <div style={{fontSize:'1.25rem',width:'20em'}}> Teamex is all about economic, social and intelligence growth. Youngster's of teamex works hard to make developed community in country.</div>
                    </Col>
                    <Col md="6">
                        Develpoing India through technology. Teamex is an institution who adapted advance technology and models to spread the awareness about key basic needs like Education, Health, Leasure and Agriculture. Direct selling is a best way to deliver product with high value. We don't say, we do it. Delivering best product at best value and satisfying customer needs through best service with good business opportunity. Yes we are teamex.
                    </Col>
                </Row>
            </Container>
        );
    }
}
