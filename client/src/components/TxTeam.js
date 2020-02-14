import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { Element } from 'react-scroll';
import one from '../assets/images/team/1.jpg'
import two from '../assets/images/team/2.jpg'
import three from '../assets/images/team/3.jpg'
import four from '../assets/images/team/4.jpg'
import five from '../assets/images/team/5.jpg'

export default class TxTeam extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Element id='achievers-teamex' name='achievers-teamex'>

                    <Coverflow width="480" height="400"
                        displayQuantityOfSide={2}
                        navigation={false}
                        enableScroll={false}
                        clickable={true}
                        active={0}
                        backgroundColor={'white'}
                    >
                        <img src={one} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={two} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={three} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={four} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                        <img src={five} alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
                    </Coverflow>
                </Element>
            </React.Fragment>
        )
    }

}
