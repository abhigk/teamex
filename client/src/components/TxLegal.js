import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

import legal1 from '../assets/docs/legal-1.png';
import legal2 from '../assets/docs/legal-2.png';
import legal3 from '../assets/docs/legal-3.png';
import legal4 from '../assets/docs/legal-4.jpg';


export default class TxFaq extends React.Component {
    render(){
        const doc = {padding:'1em',
        width:window.matchMedia('(max-width: 600px)').matches ? '100%':'',
            height:window.matchMedia('(max-width: 600px)').matches ? '20%':''
        };
        return(
            <Container>
                <Row>
                    <Col>
                        <img src={legal1} style={doc}/>
                        <img src={legal2} style={doc} />
                        <img src={legal4} style={doc} />
                        <img src={legal3} style={doc} />

                    </Col>
                </Row>
            </Container>
        )
    }
}
