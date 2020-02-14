import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import axios from 'axios';

import productImg from '../assets/images/product.png';
import OwlCarousel from "./TxProduct";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class TxProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],

        }
        window.scrollTo(0, 0);

        setTimeout(
            () => {
                this.render();
            },
            50000
        );
    }
    componentDidMount() {
        fetch(`https://api.teamex.in/web/getWebProduct`, {

            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'authorization': `bearer ${accessToken}`
            },
        })
            .then(response => response.json())
            .then((data) => {
                // console.log(Moment(data.data[0].deliveredOn).format('LLLL'), 'data')
                console.log(data.data, 'data123');

                if (data.statusCode === 200) {
                    // localStorage.setItem('access_token', data.data.access_token);
                    console.log('ORIGNAL DATA', data.data);
                    console.log('CATEGORY', this.props.history.location.state.category);

                    let selectedCategory = this.props.history.location.state.category;
                    let ary = data.data.filter(function (obj) {
                        return obj.categoryId.name === selectedCategory;
                    });

                    console.log('FILTERED DATA', ary);

                    this.setState({
                        productList: ary,

                    })

                }

            });

        // var that = this;
        // axios.get(`http://13.126.167.237:8001/web/getWebProduct`,{
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         // 'authorization': `bearer ${accessToken}`
        //     }
        // }).then(function (response) {
        //     // handle success
        //     console.log('RESPONSE ',response.data.data);
        //
        //                 // console.log('CATEGORY',that.props);
        //
        //     let selectedCategory = that.props.history.location.state.category;
        //     let ary = response.data.data.filter(function (obj) {
        //         return obj.categoryId.name === selectedCategory;
        //     });
        //
        //     console.log('FILTERED DATA',ary);
        //
        //     that.setState({
        //         productList: ary,
        //
        //     });
        // });

    }
    productDetails() {
        this.props.history.push('/product-detail');
    }
    testC(item) {


        // console.log('IIIII',itemObj);
        this.props.history.push('/product-detail', { item: item });
    }



    render() {
        // const categoryName = this.props.location.state.category;
        const whiteCard = {
            backgroundColor: "white",
            // padding:"1em 2em",
            height: "12em",
            width: "10em",
            display: 'inline'
        };
        const cardBlock = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        };
        const imgBlock = {
            height: "100%",
            width: "100%"
        };

        return (
            <div style={{ width: '100%', height: '100%', marginTop: '4em', marginBottom: '4em' }}>
                <Container >
                    {/*<h3 style={{ paddingBottom: '1em' }}>{categoryName}</h3>*/}
                    <div style={whiteCard}>
                        <Row style={{ paddingBottom: '1em' }}>
                            {
                                this.state.productList.map((item, i) => {
                                    console.log(item, 'item');

                                    return (
                                        <Col style={cardBlock}>
                                            <div style={{ alignSelf: 'center' }}>
                                                {/* <div ><img src={item.imageUrl.thumbnail} style={imgBlock} /></div> */}
                                                <div onClick={() => { this.testC(item) }}>
                                                    <div style={{ height: '14.2em', width: '14.2em' }}>
                                                        <img src={item.imageUrl[0].thumbnail} style={imgBlock} />
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: 'center' }}>{item.productName}</div>
                                                <div style={{ textAlign: 'center', color: '#5567dd' }}>₹{item.basePriceUnit}</div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>

                </Container>
            </div>
        )
    }
}
