import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Banner,
    AboutUs,
    OurServices,
    Products,
    ReachOut,
    Videos,
    DirectorMessage,
    Achievers,
    Franchise
} from "../components/pages/home"

export default class FranchiseList extends React.Component {

    render() {

        return (
            <Container fluid id='contact-teamex' name='contact-teamex'>

                <Franchise />
            </Container>
        )
    }
}
