import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import missionIcon from '../assets/icons/ic_mission.svg';
import { Element } from 'react-scroll';

export default class TxAboutMain extends React.Component {
    render() {
        const aboutText = {
            display: 'flex',
            justifyContent: 'center'
        };
        const afterBar = {
            content: '',
            display: 'block',
            marginTop: '30px',
            width: '40px',
            borderTop: '2px solid #444'
        };
        const aboutContentBlock = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'around'
        };
        const iconStyle = {
            paddingRight: '1em'
        };

        return (
            <React.Fragment>
                <Element id='about-teamex' name='about-teamex'>
                    <Container fluid id='about-teamex2' ref="hello">
                        <Row>
                            <Col style={aboutText}>
                                <div>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}> About Teamex </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={afterBar}></div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container >
                    <Container style={{ marginTop: '30px', paddingBottom: '15em' }}>
                        <Row>
                            <Col md="4">
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}><img src={missionIcon} style={iconStyle} />Our Mission</div>
                                <div style={{ fontSize: '0.875rem', width: '16em', fontWeight: 'lighter' }}>By Teamwork we gather every people of India in our organization to create income opportunity that improves economical growth & status of India.</div>
                            </Col>
                            <Col md="4">
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}><img src={missionIcon} style={iconStyle} />Our Vision</div>
                                <div style={{ fontSize: '0.875rem', width: '16em', fontWeight: 'lighter' }}>To provide the best product, service and self fulfilment needs of everyone globally. To create a company that serves everything according their needs...</div>
                            </Col>
                            <Col md="4">
                                <div style={{ fontSize: '1rem', fontWeight: 'bold' }}><img src={missionIcon} style={iconStyle} />Our Values</div>
                                <div style={{ fontSize: '0.875rem', width: '19em', fontWeight: 'lighter' }}>Trust, Respect, Teamwork, Leadership Knowledge, By providing the best environment, a person will grow personality & professional and use knowlege & skills to fulfil own dreams</div>
                            </Col>
                        </Row>
                    </Container>
                </Element>
            </React.Fragment>
        );
    }
}
