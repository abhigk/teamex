import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ReactPlayer from 'react-player';

export default class VideoGallery extends React.Component {
    render () {
        // return <ReactPlayer url='https://www.youtube.com/watch?v=Px1h_6McybM' playing />
        const data = [{
           title:"TERI KAHANI, TERI ZUBAANI EPISODE 1",
           link:'https://www.youtube.com/watch?v=pwOkceSW-3E',
        },
            {
                title:"Teamex Bhumivita explain by Mr Mayur Gondaliya in Gujarati",
                link:'https://www.youtube.com/watch?v=iVfH6Fbp8Sg',
            },
            {
                title:"Teamex Vruddhivita explain by Mr Mayur Gondaliya in Gujarati ",
                link:'https://www.youtube.com/watch?v=6Q7q7lDLwYI',
            },
            {
                title:"Teamex Sunscreen",
                link:'https://www.youtube.com/watch?v=CWWnD5i5kd0',
            },
            {
                title:"Teamex Agriculture product result & customer feedback",
                link:'https://www.youtube.com/watch?v=zndoXP7v4rw',
            },
            {
                title:"TEAMEX HAIR SPA AMAZING RESULT & CUSTOMER REVIEW",
                link:'https://www.youtube.com/watch?v=M41LOdb4lzM',
            },
            {
                title:"Teamex Noni Toothpaste Amazing Results",
                link:"https://www.youtube.com/watch?v=FDG6LbrwLy8"
            },
            {
                title:"Teamex Award & Recognition 2019 - Rajkot",
                link:"https://www.youtube.com/watch?v=fV8aOMKI0CE"
            },{
                title:"Youngest Leader of Teamex (Arjun Mardiya) | Teamex Retail Limited",
                link:"https://www.youtube.com/watch?v=TIzinB0QDbs"
            },{
                title:"Success Story of Dynamic Leader (Rahul Rathod) | Teamex Retail Limited",
                link:"https://www.youtube.com/watch?v=YNdgoGZiAro"
            },{
                title:"Success Story of Royalti (Rahul Bhatti)",
                link:"https://www.youtube.com/watch?v=TYc2qJjbjQU"
            },{
                title:"Success Story of Royalti (Pravin Makwana)",
                link:"https://www.youtube.com/watch?v=mSjJFXiC0cY"
            },{
                title:"धूम्रपान कि लत से मुक्ति..!! सर्वश्रेष्ठ इलाज",
                link:"https://www.youtube.com/watch?v=xmIQZ_Kb3OE"
            },{
                title:"घुटने और जोड़ो के दर्द का रामबाण इलाज ",
                link:"https://www.youtube.com/watch?v=oVruuQjVbLg"
            },{
                title:"TEAMEX VRUDDHIVITA ORGANIC HERBAL EXPLAIN BY NIRMAL SIR",
                link:"https://www.youtube.com/watch?v=OPuxiy_JIds"
            },{
                title:"Teamex Ayurveda",
                link:"https://www.youtube.com/watch?v=1STXtazE8T8"
            },{
                title:"TEAMEX AWARD & RECOGNITION 2018",
                link:"https://www.youtube.com/watch?v=zipz4ovkVJM"
            },{
                title:"Teamex Rajkot Youth Conclave",
                link:"https://www.youtube.com/watch?v=6ZZh6Wth5Mo"
            },{
                title:"Teamex Ahmedabad Conclave",
                link:"https://www.youtube.com/watch?v=GaFpI5ssXO0"
            },{
                title:"Why we should drink Noni Juice ? ",
                link:"https://www.youtube.com/watch?v=TsaEc6Qlpek"
            },{
                title:"TeamEx Elegance Shampoo",
                link:"https://www.youtube.com/watch?v=UxbYfRbs6mc"
            },{
                title:"TeamEx Care Handwash",
                link:"https://www.youtube.com/watch?v=BmD0_oOxChQ"
            },{
                title:"TeamEx Bliss Turmeric Scrub",
                link:"https://www.youtube.com/watch?v=VHNkuR3dE08"
            },{
                title:"Teamex Revolution & Mega Product Launching",
                link:"https://www.youtube.com/watch?v=W-EiVl28nk4"
            },{
                title:"Narendra Modi on Direct Selling",
                link:"https://www.youtube.com/watch?v=ifh22udSx-s"
            },{
                title:"Acne Gel | Eraze | Teamex Cosmetics",
                link:"https://www.youtube.com/watch?v=Rbybtqowwvs"
            },{
                title:"Hair Gel | Attraction | Teamex Cosmetics",
                link:"https://www.youtube.com/watch?v=Np55vITE_LU"
            },{
                title:"Argan Oil Shampoo | Elegence | Teamex Cosmetics",
                link:"https://www.youtube.com/watch?v=n73b4bVfkuE"
            },{
                title:"Beautika Face Gel | Beautika | Teamex Cosmetics",
                link:"https://www.youtube.com/watch?v=W7pGrl1fB-k"
            },{
                title:"Mr. Hiren Patel | Teamex Tiger | Teamex Retail Ltd",
                link:"https://www.youtube.com/watch?v=V9bGca74H7k"
            },{
                title:"Mr. Nirmal Patel | Founder | Teamex Retail LTd",
                link:"https://www.youtube.com/watch?v=gFlDtoNefag"
            },{
                title:"Rajkot Teamex Mega Awards",
                link:"https://www.youtube.com/watch?v=h4BDxCRLOrI"
            },{
                title:"Teamex Launching Function",
                link:"https://www.youtube.com/watch?v=-upFmhhPfqs"
            }];

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div style={{fontSize:'2.5em',fontWeight:'bold',color:'#5567dd'}}>Video Gallery</div>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, i) => {
                        return (
                    <Col>
                        <div style={{padding:'1em'}}>
                        <ReactPlayer url={item.link} width='20em' height='12em' controls/>
                        <div style={{fontWeight:'bold'}}>{item.title}</div>
                        </div>
                    </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        );
    };
}
