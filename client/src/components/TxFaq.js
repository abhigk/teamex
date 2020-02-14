import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class TxFaq extends React.Component {
    render() {
        const heading = { fontWeight: 'bold', width: window.matchMedia('(max-width: 600px)').matches ? '':'50vw',textAlign:window.matchMedia('(max-width: 600px)').matches ? 'justify': '' };
        const answer = { width: window.matchMedia('(max-width: 600px)').matches ? '':'50vw',textAlign:window.matchMedia('(max-width: 600px)').matches ? 'justify': ''};
        return (
            <Container>
                <Row>
                    <Col>
                        <div style={{ fontSize: '2.5em', fontWeight: 'bold', color: '#5567dd' }}>Faq</div>
                        <div style={{ paddingTop: '1em', paddingBottom: '1em', paddingLeft: window.matchMedia('(max-width: 600px)').matches ? '':'5em', paddingRight: window.matchMedia('(max-width: 600px)').matches ? '' :'5em' }}>
                            <h6 style={heading}>Q. How do i get my lost password?</h6>
                            <p style={answer}>A. Please notify Teamex Retail Ltd. of receipt of a damaged/ defective product/service within 48-hours of delivery of You. If You are unable to do so within 48-hours, Teamex Retail Ltd. shall not be held liable for the failure to replace the order.</p>
                            <h6 style={heading}>Q. There have been deduction from my earnings in form of TDS and Administration charges, what are the tearms regarding this?</h6>
                            <p style={answer}>From all your earnings, 5 % would be deducted as TDS and Rs. 50/- will be be deducted as an administrative charge for your each weekly payment. TDS would be deposited with the income tax department, government of India.</p>

                            <h6 style={heading}>Q. Do i have to submit PAN to receive my commisions?</h6>
                            <p style={answer}>Each person has to submit a photocopy of his/her PAN card to receive incentives from the company.</p>

                            <h6 style={heading}>Q. What investment do i have to make in order to participate in the business?</h6>
                            <p style={answer}>No investment is required to participate in the business. Anybody who has purchased any of our product packages and is satisfied with it can start promoting it and earn incentives.</p>

                            <h6 style={heading}>Q. How do i receive my earned income?</h6>
                            <p style={answer}>All your earned income would be transferred by NEFT or issued by cheque after deduction of TDS and administrative charges.</p>

                            <h6 style={heading}>Q. What are the terms and conditions one needs to abide by in order to earn commission from Teamex Retail Limited businees opportunity?</h6>
                            <p style={answer}>Anybody who has purchased any of our Packages and is satisfied with the same can start promoting the business. But one needs to strictly follow all terms and conditions given on the website.</p>

                            <h6 style={heading}>Q. Can i distribute self designed brochures, pamphlets or advertise throught print media in order to promote Teamex Retail Ltd. Business?</h6>
                            <p style={answer}>No. Prior permission from the company is needed to do the same.</p>

                            <h6 style={heading}>Q. In which states  Teamex Retail Limited do busines?</h6>
                            <p style={answer}>Teamex Retail Ltd has the right to do business in all the states of India.</p>

                            <h6 style={heading}>Q. Is there an age requirement to become a Teamex Retail Limited distributor?</h6>
                            <p style={answer}>You must be between 18 to 60 years of age to participate in Teamex Retail Ltd as a Distributor.</p>

                            <h6 style={heading}>Q. How can one become Teamex Retail Limited distributor?</h6>
                            <p style={answer}>One should be sponsored by an existing Teamex Retail Ltd Distributor to become a Teamex Retail Ltd Distributor.</p>

                            <h6 style={heading}>Q. Are Teamex Retail Limited distributors employees or members of the organization?</h6>
                            <p style={answer}>No they are neither employees nor members of the Organization. They are independent Distributors.</p>

                            <h6 style={heading}>Q. What payment method does Teamex Retail Limited accept?</h6>
                            <p style={answer}>No they are neither employees nor members of the Organization. They are independent Distributors.</p>

                            <h6 style={heading}>Q. Why PAN card is required while registration?</h6>
                            <p style={answer}>This PAN Card information is required for Tax deduction at Source on the commission you get which will be paid to the Income tax department on your PAN.</p>


                            <h6 style={heading}>Q. My password and other details are disclosed during online registration, what should i do now?</h6>
                            <p style={answer}>It is your duty to change all the confidential information like password etc after taking all the information from sponsor. We will not be responsible for any mishappening in this regard.</p>


                            <h6 style={heading}>Q. How long does it take to activate the distributorship?</h6>
                            <p style={answer}>The Distributorship is activated immediately after you have finished the registration with the Serial No.</p>




                            <h6 style={heading}>Q. Am i charged for product delivery?</h6>
                            <p style={answer}>No the delivery is Free of Cost.</p>





                            <h6 style={heading}>Q. What is the maximum time for the products/packages get delivered at our correspondence?</h6>
                            <p style={answer}>Teamex Retail Ltd Products/Package will be delivered at your registered correspondence (anywhere in India) within four weeks by the courier from the date of order/joining.</p>






                            <h6 style={heading}>Q. What is carry forward?</h6>
                            <p style={answer}>Here is how carry forward works. It takes your lesser leg SP for that Week and subtracts it from the greater leg SP. So for example, if you have 50 SP in your lesser and 75 SP in your greater you will have 25 SP in carry forward for the next Week.</p>





                            <h6 style={heading}>Q. I feel misguided by Teamex Retail Limited distibutor and want to get my money back? what should i do?</h6>
                            <p style={answer}>
                                After taking all the information from any Teamex Retail Ltd Distributor it is your responsibility to confirm all details yourself by visiting our website www.teamex.in. We also request you to go through our Terms and Conditions and FAQs properly before becoming a distributor. It should be noted that Organization is not liable for any kind of false commitment/information provided by any Distributor.</p>






                            <h6 style={heading}>Q. Do i need to review my account every year?</h6>
                            <p style={answer}>The Distributorship of Teamex Retail Ltd . is for lifetime, hence you need not renew your account every year.</p>





                            <h6 style={heading}>Q. What is the procedure for site transfer?</h6>
                            <p style={answer}>Site transfer is strictly not allowed. Once you have taken Distributorship for Teamex Retail Ltd services and products, you can't transfer this Distributorship to any other person.</p>





                            <h6 style={heading}>Q. I have purchased the basic product packages and have sold it to two other people. purchasing distributors are working very hard and i am getting commissions due to the business generated by them. would i continue to earn commission forever?</h6>
                            <p style={answer}>

                                Any person, who wishes to join Teamex Retail Ltd as a Distributor, is eligible to work and earn commissions/ incentives. But the incentives earned by an individual are directly proportional to his/her involvement in promotion of the system. The Organization reserves the right to reject commission of any Distributors who are found engaged in activities that are against the Organization's benefit. In this case an Distributor will still enjoy the services.</p>




                            <h6 style={heading}>Q.
I have sold many product packages, still i have not received any cheque, why?</h6>
                            <p style={answer}>You start receiving commission only when you fulfill the criteria fixed for earning commission. In order to receive your first commission cheque you must have three sales in your organization in the ratio of 1:2 or 2:1.</p>





                            <h6 style={heading}>Q. I have seen online the last commission earned but i have not received yet.</h6>
                            <p style={answer}>If you have sent us the photocopy of your PAN Card then you are requested to wait for at least 10-15 days depending on the location of your residence as all the Cheques are sent either through courier or through speed post. If after 15 Days you still have not received your commission then please send us your query at the Distributor Supporter Call us on 079-22770377.</p>






                            <h6 style={heading}>Q.
I am earning commissions from Teamex Reatil Limited. Can i join other organization/business directly or indirectly?</h6>
                            <p style={answer}>No the delivery is Free of Cost.</p>




                            <h6 style={heading}>Q. If you are earning commissions from Teamex Retail Ltd you cannot join any other Network Marketing Oraganization/ Business directly or indirectly otherwise you would lose your right to get any further commissions from Teamex Retail Ltd.</h6>
                            <p style={answer}>No the delivery is Free of Cost.</p>





                            <h6 style={heading}>Q.
What will happen if i found involved in anti-organization activities?</h6>
                            <p style={answer}>
                                If any Distributor is found not following our Legals or found to indulge in any anti-Organization activity in any manner or found disturbing the private or public business meeting, all the ongoing commissions from the Oraganization, will be denied to him/her with immediate effect and without any notice.</p>






                            <h6 style={heading}>Q. What if i lose my cheque issude by Teamex Retail Limited?</h6>
                            <p style={answer}>If you lose your cheque, you have to send e-mail at teamexretail@gmail.com requesting for issue of new cheque from your registered e-mail ID at company. A new cheque will be issued you after deducting Rs. 200/- as an admin charge from your cheque amount within two weeks.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
