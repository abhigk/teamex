import React from 'react';

export default class Orders extends React.Component {
    render() {
        return (
            <div className='orderSummaryDiv'>
                <h3 style={{ textAlign: 'center', color: 'darkgreen', paddingTop: '2%', fontWeight: 'bold' }}>Order Placed Successfully</h3>
                <h4 style={{ paddingTop: '10%', paddingLeft: '4%', fontWeight: 'bold' }}>Your order has been placed and order details  has been sent to your email address.</h4>
                {/* <div className='orderDetailsDiv'>
                    <h5>Order Number :-</h5>
                    <h5>ZXCVVVNVV </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>Customer Name :-</h5>
                    <h5>Abhishek Khanna </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>Address :-</h5>
                    <h5>Zirakpur </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>City :-</h5>
                    <h5>Abhishek Khanna </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>State :-</h5>
                    <h5>Abhishek Khanna </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>Contact Number :-</h5>
                    <h5>9988528141 </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>Order Method :-</h5>
                    <h5>Cash on Delivery </h5>
                </div>
                <div className='orderDetailsDiv'>
                    <h5>Order Status :-</h5>
                    <h5>Pending </h5>
                </div> */}
            </div>
        );
    }
}