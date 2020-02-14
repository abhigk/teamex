import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class Refund extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div style={{ fontSize: window.matchMedia('(max-width: 600px)').matches ? '2em':'2.5em', fontWeight: 'bold', color: '#5567dd' }}>REFUND & RETURN</div>
                        <div style={{ padding: window.matchMedia('(max-width: 600px)').matches ? '1em':'5em',textAlign:window.matchMedia('(max-width: 600px)').matches ? 'justify':'' }}>
                            <p>
                                In the event You receive a damaged / defective product or a product that does not comply with the specifications as per your original order, You are required to get in touch with the customer service team through any of the below mentioned channels:                        </p>
                            <ul>
                                <li>Contact Number 079-22770377</li>
                                <li>Filling up the 'Contact Us' form;
</li>
                            </ul>
                            <p>
                                Upon receiving Your complaint, Teamex Retail Ltd. shall verify the authenticity and the nature of the complaint and if Teamex Retail Ltd. is convinced that the complaint is genuine, Teamex Retail Ltd. will inform the relevant Vendor of such complaint and request for a replacement. However, in the event of frivolous and baseless complaints regarding the quality and content of the products, Teamex Retail Ltd. reserves the right to take necessary legal actions against You and You will be solely liable for all costs incurred by Teamex Retail Ltd. in this regard. You expressly acknowledge that the Vendor selling the defective product/ service will be solely responsible to You for any claims that You may have in relation to such defective product/ service and Teamex Retail Ltd. shall not in any manner be held liable for the same.
                        </p>
                            <p>
                                Before accepting shipment of any product, kindly ensure that the product's packaging is not damaged or tampered. If You observe that the package is damaged or tampered, request You to refuse to accept delivery and inform Teamex Retail Ltd. at the earliest. The return process of the product may be restricted by Teamex Retail Ltd. depending on the nature and category of the product.                        </p>
                            <p>
                                In order to return any products sold through the Website, You are required to comply with the below mentioned conditions, viz:                        </p>
                            <ul>
                                <li>Please notify Teamex Retail Ltd. of receipt of a damaged/ defective product/service within 48-hours of delivery to You. If You are unable to do so within 48-hours, Teamex Retail Ltd. shall not be held liable for the failure to replace the order;</li>
                                <li>Products should be unused.
</li>
                                <li>Teamex Retail Ltd. will not arrange pick-up of the damaged/defective product. You will have to ship it to Teamex Office.</li>
                                <li>Products should be returned in their original packaging along with the original price tags, labels, barcodes, user manual, warranty card and invoices etc.</li>
                                <li>It is advised that the return packets should be strongly and adequately packaged so that there is no further damage of products during transit.</li>
                                <li>The returned products are subject to verification and checks by Teamex Retail Ltd. in order to determine the legitimacy of the complaint/ return.</li>
                            </ul>
                            <p>
                                In the event the return of a product is duly accepted by Teamex Retail Ltd. , the value of such product, as originally paid by You during acceptance of delivery of product or otherwise, will be refunded to You. Refund will be processed based on the mode of payment and Teamex Retail Ltd. or the approved payment gateway will credit Your refunds directly into Your debit/credit card or online accounts or provide You with a cheque in this regard. Refunds will be subject to the following:                        </p>
                            <ul>
                                <li>

                                    Orders paid online will be refunded within 7-21 working days through the online account or via cheque, depending on the then current circumstances as determined by Teamex Retail Ltd.
                                    </li>
                                <li>For Cash on Delivery payments, You will be provided with a refund cheque.</li>
                                <li>If the product can be repaired by the service centre, Teamex Retail Ltd. would get the same repaired and send it back to You.</li>
                                <li>A promo code, once used shall not be refunded in case of cancellation of order either by customer or Teamex Retail Ltd.</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
