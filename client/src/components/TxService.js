import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Container, Row, Col, Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'


import bodyCare from '../assets/images/ic_body_Care.png';
import education from '../assets/images/ic_education.png';
import faceCare from '../assets/images/ic_face_care.png';
import healthCare from '../assets/images/ic_health.png';
import { Element } from 'react-scroll';
import backIcon from '../assets/icons/ic_back.svg';
import Coverflow from 'react-coverflow';


const item = {
    height: "10rem",
    background: "#4DC7A0",
    padding: "1rem",
};
const imgBlock = {
    width: '16.875em',
    height: '21.75em'
};
const imgText = {
    position: "absolute",
    left: "1.5em",
    top: "18em",
    margin: "auto",
    color: "white",
    fontSize: "1em",
    fontWeight: "bold",
};
const iconb = {
    backgroundImage: backIcon
};
const contactBtn = {
    borderRadius: '0px',
    backgroundColor: '#5567dd',
    width: '21em',
    padding: '0.8rem 0.6rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginLeft: '30%',
    marginTop: '3%'
};
class TxService extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productCategory: [],
            categoryName: ''

        }
    }
    componentDidMount() {

        fetch(`https://api.teamex.in/web/getWebCategory`, {

            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'authorization': `bearer ${accessToken}`
            },
        })
            .then(response => response.json())
            .then((data) => {
                // console.log(Moment(data.data[0].deliveredOn).format('LLLL'), 'data')
                console.log(data, 'data123');

                if (data.statusCode === 200) {
                    // localStorage.setItem('access_token', data.data.access_token);
                    this.setState({
                        productCategory: data.data,
                        categoryName: data.data[0].name

                    })

                }

            });
    }

    onProduct(name) {
        this.setState({
            categoryName: name
        })
    }

    onProceed() {
        console.log(this.state.categoryName)
        this.props.history.push('/product-list', { category: this.state.categoryName })
        // e.preventDefault();

        // this.context.router.transitionTo('/product-list');
    }
    render() {

        // const item = {
        //     height: "10rem",
        //     background: "#4DC7A0",
        //     padding: "1rem",
        // };
        // const imgBlock = {
        //     width: '16.875em',
        //     height: '21.75em'
        // };
        // const imgText = {
        //     position: "absolute",
        //     left: "1.5em",
        //     top: "18em",
        //     margin: "auto",
        //     color: "white",
        //     fontSize: "1em",
        //     fontWeight: "bold",
        // };
        // const iconb = {
        //     backgroundImage: backIcon
        // };
        let elements = [];
        elements = this.state.productCategory.length > 0 && this.state.productCategory.map(item => {
            // console.log(item, 'dcdcc')
            return <div>
                <img src={education} style={imgBlock} />
                <h3 style={imgText}>health</h3>
            </div>
        });

        return (

            <Container style={{ paddingBottom: '15em' }} id="test">
                <Element id='services' name='services'>

                    <Row>
                        <Col>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', paddingBottom: '1em' }}>Our Services</div>

                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <div style={{ fontSize: '0.875rem', fontWeight: 'lighter', width: '35.625em', paddingBottom: '3.75em' }}>Cursus eget nunc scelerisque viverra mauris in aliquam. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Cursus in hac habitasse platea. Netus et malesuada fames ac. Volutpat consequat mauris nunc</div>
                        </Col>
                    </Row>

                    <Row>


                        <Col>
                            <Coverflow
                                displayQuantityOfSide={2}
                                // navigation
                                enableScroll={false}
                                clickable
                                infiniteScroll
                                // enableHeading
                                media={{
                                    '@media (max-width: 900px)': {
                                        width: '600px',
                                        height: '300px'
                                    },
                                    '@media (min-width: 900px)': {
                                        width: '960px',
                                        height: '600px'
                                    }
                                }}
                            >
                                {
                                    this.state.productCategory && this.state.productCategory.map(image => {
                                        return <div style={imgBlock}><img src={faceCare} onClick={() => this.onProduct(image.name)} /><h3 style={imgText}>{image.name}</h3></div>

                                    })
                                }
                            </Coverflow>
                            <Button onClick={() => this.onProceed()}>Click to shop this category</Button>


                        </Col>

                    </Row>
                </Element>
            </Container>

        );
    }
}
export default withRouter(TxService);
