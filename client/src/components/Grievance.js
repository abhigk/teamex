import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MapContainer from "./MapContainer";
import { Element } from 'react-scroll';
import { Alert } from 'react-bootstrap'

export default class Grievance extends React.Component {
    constructor(props) {
        super(props)
        console.log('propssss...', this.props);
        // test = this.props.location.state;
        this.state = {
            quantity: 1,
            error: false,
            variantType: '',
            errorMessage: '',
            name: '',
            email: '',
            subject: '',
            message: '',
            isContact: false
        }
    }
    handleChange = event => {
        console.log(event.target.placeholder)
        if (event.target.placeholder === 'Name') {
            this.setState({
                name: event.target.value
            });
        }
        else if (event.target.placeholder === 'Email') {
            this.setState({
                email: event.target.value
            });
        }
        else if (event.target.placeholder === 'Subject') {
            this.setState({
                subject: event.target.value
            });
        }
        else if (event.target.placeholder === 'Message') {
            this.setState({
                message: event.target.value
            });
        }


    }

    contactQuery() {
        this.setState({
            isContact: true
        })
        fetch("https://api.teamex.in/api/users/contact", {

            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                email: this.state.email,
                name: this.state.name,
                message: this.state.message,
                subject: this.state.subject

            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data, 'data')
                if (data.statusCode === 200) {
                    this.setState({
                        error: true,
                        variantType: 'success',
                        errorMessage: 'Query registered successfully',
                        isContact: false
                    })
                    setTimeout(
                        function () {
                            this.setState({ error: false });
                        }
                            .bind(this),
                        5000
                    );


                }
                if (data.statusCode === 400) {
                    this.setState({
                        error: true,
                        variantType: 'danger',
                        errorMessage: data.message,
                        isContact: false
                    })

                    setTimeout(
                        function () {
                            this.setState({ error: false });
                        }
                            .bind(this),
                        5000
                    );
                }
            });
    }
    render() {
        const inputBox = {
            width: '24em',
            padding: '1.375rem 1.6rem',
            fontSize: '0.87rem',
            fontWeight: 'bold',
            borderRadius: '0rem'
        };
        const contactBtn = {
            borderRadius: '0px',
            backgroundColor: '#5567dd',
            width: '21em',
            padding: '1.375rem 1.6rem',
            fontSize: '1rem',
            fontWeight: 'bold'
        };
        const formBlock = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };
        return (
            <Container fluid id='contact-teamex' name='contact-teamex'>
                <Alert show={this.state.error} variant={this.state.variantType}>
                    {this.state.errorMessage}
                </Alert>
                <Element id='contact-teamex' name='contact-teamex'>
                    <Row>
                        <Col md="6" style={formBlock}>
                            <div style={{ alignSelf: 'center' }}>
                                <Row>
                                    <Col>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', paddingBottom: '0.813em' }}>Contact Us</div>
                                    </Col>
                                </Row>
                                <Row>

                                </Row>
                                <Row style={{ paddingBottom: '5em' }}>
                                    <Form style={{ paddingLeft: '1em' }} >
                                        <FormGroup>
                                            <Input type="text" style={inputBox} onChange={this.handleChange} name="userName" placeholder="Name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="email" style={inputBox} onChange={this.handleChange} name="email" placeholder="Email" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="text" style={inputBox} onChange={this.handleChange} name="subject" placeholder="Subject" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="textarea" style={inputBox} onChange={this.handleChange} name="message" placeholder="Message" />
                                        </FormGroup>
                                        <Button style={contactBtn} onClick={() => this.contactQuery()} disabled={this.state.isContact}>Submit</Button>
                                    </Form>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6">
                            <MapContainer />
                        </Col>
                    </Row>
                </Element>

            </Container>
        )
    }
}
